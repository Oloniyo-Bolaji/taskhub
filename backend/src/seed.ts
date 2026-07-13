import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserRole, User } from './users/schemas/user.schema';
import { ProjectDocument, Project } from './projects/schemas/project.schema';
import { TaskDocument, Task, TaskPriority, TaskStatus } from './tasks/schemas/task.schema';
import { NotificationDocument, Notification, NotificationType } from './notifications/schemas/notification.schema';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userModel = app.get<Model<UserDocument>>(getModelToken(User.name));
  const projectModel = app.get<Model<ProjectDocument>>(getModelToken(Project.name));
  const taskModel = app.get<Model<TaskDocument>>(getModelToken(Task.name));
  const notificationModel = app.get<Model<NotificationDocument>>(getModelToken(Notification.name));

  console.log('Clearing existing data...');
  await userModel.deleteMany({});
  await projectModel.deleteMany({});
  await taskModel.deleteMany({});
  await notificationModel.deleteMany({});

  console.log('Creating Admin User...');
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await userModel.create({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@kybern.local',
    password: adminPassword,
    role: UserRole.ADMIN,
  });

  console.log('Creating Demo Users...');
  const users = [];
  const defaultPassword = await bcrypt.hash('password123', 10);
  for (let i = 1; i <= 10; i++) {
    users.push({
      firstName: `Demo`,
      lastName: `User${i}`,
      email: `user${i}@kybern.local`,
      password: defaultPassword,
      role: UserRole.MEMBER,
    });
  }
  const createdUsers = await userModel.insertMany(users);

  console.log('Creating Projects...');
  const projectNames = ['Marketing Website', 'Student Portal', 'Inventory System', 'Payment Gateway', 'HR Portal'];
  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'];
  const createdProjects: any[] = [];
  for (let i = 0; i < projectNames.length; i++) {
    createdProjects.push(
      await projectModel.create({
        title: projectNames[i],
        description: `Description for ${projectNames[i]}`,
        color: colors[i],
        owner: admin._id.toString(),
        members: [admin._id.toString(), ...createdUsers.slice(0, 3).map(u => u._id.toString())],
      })
    );
  }

  console.log('Creating Tasks...');
  const statuses = [TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.REVIEW, TaskStatus.DONE];
  const priorities = [TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH, TaskPriority.CRITICAL];
  const createdTasks: any[] = [];
  for (let i = 1; i <= 25; i++) {
    const project = createdProjects[i % createdProjects.length];
    createdTasks.push(
      await taskModel.create({
        title: `Task ${i}`,
        description: `Detailed description for task ${i}`,
        priority: priorities[i % priorities.length],
        status: statuses[i % statuses.length],
        dueDate: new Date(Date.now() + i * 86400000), // Future dates
        project: project._id.toString(),
        assignedTo: i % 2 === 0 ? admin._id.toString() : createdUsers[0]._id.toString(),
        labels: ['feature', `module-${i % 3}`],
      })
    );
  }

  console.log('Creating Notifications...');
  for (let i = 1; i <= 20; i++) {
    await notificationModel.create({
      message: `Notification ${i} regarding your tasks`,
      user: admin._id.toString(),
      type: NotificationType.TASK_UPDATED,
      relatedId: createdTasks[0]._id.toString(),
    });
  }

  console.log('Seeding completed successfully!');
  await app.close();
}

bootstrap();
