import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: number;

  @Prop()
  @IsUrl()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
