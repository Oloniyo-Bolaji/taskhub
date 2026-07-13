import { IsNotEmpty, IsOptional, IsString, IsArray, IsHexColor } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'Marketing Campaign' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Q3 marketing materials' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '#ff0000', required: false })
  @IsHexColor()
  @IsOptional()
  color?: string;

  @ApiProperty({ type: [String], description: 'Array of user IDs', required: false })
  @IsArray()
  @IsOptional()
  members?: string[];
}
