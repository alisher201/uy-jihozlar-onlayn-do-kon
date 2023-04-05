import { HydratedDocument } from 'mongoose';
import { Schema, SchemaFactory } from "@nestjs/mongoose";

export type CustomerDocument = HydratedDocument<Customer>
@Schema()
export class Customer {
    name: string;
    email: string;
    password: string;
    phone: string;
}
export const CustomerSchema = SchemaFactory.createForClass(Customer)