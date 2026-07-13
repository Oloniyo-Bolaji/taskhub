import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret: any) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: '#1890ff' }) // Ant Design default blue
  color: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  owner: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'User' }])
  members: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
