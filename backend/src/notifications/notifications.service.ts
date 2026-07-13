import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification, NotificationDocument } from './schemas/notification.schema';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(@InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const createdNotification = new this.notificationModel(createNotificationDto);
    return createdNotification.save();
  }

  async findAllForUser(userId: string): Promise<Notification[]> {
    return this.notificationModel.find({ user: userId }).sort({ createdAt: -1 }).exec();
  }

  async markAsRead(id: string, userId: string): Promise<Notification | null> {
    return this.notificationModel.findOneAndUpdate({ _id: id, user: userId }, { read: true }, { new: true }).exec();
  }

  async markAllAsRead(userId: string): Promise<any> {
    return this.notificationModel.updateMany({ user: userId, read: false }, { read: true }).exec();
  }
}
