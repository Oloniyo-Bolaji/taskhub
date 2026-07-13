import { IsNotEmpty, IsString, IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NotificationType } from '../schemas/notification.schema';

export class CreateNotificationDto {
  @ApiProperty({ example: 'You have been assigned to task X' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: '60d0fe4f5311236168a109cb' })
  @IsMongoId()
  @IsNotEmpty()
  user: string;

  @ApiProperty({ enum: NotificationType })
  @IsEnum(NotificationType)
  @IsNotEmpty()
  type: NotificationType;

  @ApiProperty({ example: '60d0fe4f5311236168a109ca', required: false })
  @IsMongoId()
  @IsOptional()
  relatedId?: string;
}
