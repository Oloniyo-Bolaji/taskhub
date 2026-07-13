import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  async create(createProjectDto: CreateProjectDto, userId: string): Promise<Project> {
    const createdProject = new this.projectModel({
      ...createProjectDto,
      owner: userId,
      members: createProjectDto.members ? [...new Set([userId, ...createProjectDto.members])] : [userId],
    });
    return createdProject.save();
  }

  async findAll(userId: string): Promise<Project[]> {
    return this.projectModel.find({ members: userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<Project> {
    const project = await this.projectModel.findOne({ _id: id, members: userId }).populate('members', 'firstName lastName email avatar role').exec();
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return project;
  }

  async update(id: string, updateData: Partial<CreateProjectDto>, userId: string): Promise<Project> {
    const project = await this.projectModel.findOneAndUpdate({ _id: id, members: userId }, updateData, { new: true }).exec();
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return project;
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.projectModel.deleteOne({ _id: id, owner: userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Project not found or you do not have permission to delete it');
    }
  }
}
