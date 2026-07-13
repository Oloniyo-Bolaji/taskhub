import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from '../projects/schemas/project.schema';
import { Task, TaskDocument } from '../tasks/schemas/task.schema';
import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async globalSearch(query: string, userId: string) {
    if (!query) {
      return { projects: [], tasks: [], users: [] };
    }

    const regex = new RegExp(query, 'i');

    const [projects, tasks, users] = await Promise.all([
      this.projectModel.find({ 
        members: userId,
        $or: [{ title: regex }, { description: regex }]
      }).limit(10).exec(),
      
      this.taskModel.find({
        $or: [{ title: regex }, { description: regex }]
      }).limit(10).exec(),

      this.userModel.find({
        $or: [{ firstName: regex }, { lastName: regex }, { email: regex }]
      }).limit(10).exec()
    ]);

    return { projects, tasks, users };
  }
}
