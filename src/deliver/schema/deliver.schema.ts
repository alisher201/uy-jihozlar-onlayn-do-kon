import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type DeliverDocument = HydratedDocument<Deliver>
@Schema()
export class Deliver {
    @Prop()
    name:string;
}
export const  DeliverSchema  = SchemaFactory.createForClass(Deliver)
