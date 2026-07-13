import { IsNotEmpty, IsOptional, IsString, IsEnum, IsArray, IsDateString, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskPriority, TaskStatus } from '../schemas/task.schema';

export class CreateTaskDto {
  @ApiProperty({ example: 'Implement login page' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Create the UI for the login page' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ enum: TaskPriority, required: false, default: TaskPriority.MEDIUM })
  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @ApiProperty({ enum: TaskStatus, required: false, default: TaskStatus.TODO })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({ example: '2023-12-31T23:59:59Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({ example: '60d0fe4f5311236168a109ca' })
  @IsMongoId()
  @IsNotEmpty()
  project: string;

  @ApiProperty({ example: '60d0fe4f5311236168a109cb', required: false })
  @IsMongoId()
  @IsOptional()
  assignedTo?: string;

  @ApiProperty({ type: [String], example: ['frontend', 'auth'], required: false })
  @IsArray()
  @IsOptional()
  labels?: string[];
}
