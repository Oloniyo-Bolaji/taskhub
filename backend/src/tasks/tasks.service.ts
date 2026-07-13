import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument, TaskStatus } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto, userId: string): Promise<Task> {
    const createdTask = new this.taskModel({
      ...createTaskDto,
    });
    return createdTask.save();
  }

  async findAll(userId: string): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findAllByProject(projectId: string, userId: string): Promise<Task[]> {
    // In a real app, verify user is in project.members
    return this.taskModel.find({ project: projectId }).exec();
  }

  async findAllAssignedToUser(userId: string): Promise<Task[]> {
    return this.taskModel.find({ assignedTo: userId }).exec();
  }

  async update(id: string, updateData: Partial<CreateTaskDto>, userId: string): Promise<Task | null> {
    // Basic implementation: anyone can edit if they have access to the task
    return this.taskModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async updateStatus(id: string, status: TaskStatus, userId: string): Promise<Task | null> {
    return this.taskModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async remove(id: string, userId: string): Promise<any> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
