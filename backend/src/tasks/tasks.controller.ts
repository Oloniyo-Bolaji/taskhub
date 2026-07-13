import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TaskStatus } from './schemas/task.schema';

@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  create(@Body() createTaskDto: CreateTaskDto, @Request() req: any) {
    return this.tasksService.create(createTaskDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  findAll(@Request() req: any) {
    return this.tasksService.findAll(req.user.id);
  }

  @Get('project/:projectId')
  @ApiOperation({ summary: 'Get all tasks for a specific project' })
  findAllByProject(@Param('projectId') projectId: string, @Request() req: any) {
    return this.tasksService.findAllByProject(projectId, req.user.id);
  }

  @Get('assigned')
  @ApiOperation({ summary: 'Get all tasks assigned to current user' })
  findAllAssignedToUser(@Request() req: any) {
    return this.tasksService.findAllAssignedToUser(req.user.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update task details' })
  update(@Param('id') id: string, @Body() updateTaskDto: Partial<CreateTaskDto>, @Request() req: any) {
    return this.tasksService.update(id, updateTaskDto, req.user.id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update task status' })
  updateStatus(@Param('id') id: string, @Body('status') status: TaskStatus, @Request() req: any) {
    return this.tasksService.updateStatus(id, status, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  remove(@Param('id') id: string, @Request() req: any) {
    return this.tasksService.remove(id, req.user.id);
  }
}
