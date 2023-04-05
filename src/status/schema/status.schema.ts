import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type StatusDocument = HydratedDocument<Status>
@Schema()
export class Status {
    @Prop()
    quantity: number
}
export const StatusSchema = SchemaFactory.createForClass(Status)