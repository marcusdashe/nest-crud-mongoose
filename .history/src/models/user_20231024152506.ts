/* eslint-disable prettier/prettier */
import { Schema, Prop } from '@nestjs/mongoose';

export type UserDocument = {
  name: string;
  email: string;
};

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;
}
