import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PaymentDocument = HydratedDocument<Payment>
@Schema()
export class Payment {
    @Prop()
    payment:string;
}
export const PaymentSchema = SchemaFactory.createForClass(Payment);
