import { HydratedDocument } from 'mongoose';
import { Schema, SchemaFactory } from "@nestjs/mongoose";
export type CustomerAdressDocument = HydratedDocument<CustomerAdress>
@Schema()
export class CustomerAdress {
    user_id: number;
    location: string;   
}
export const CustomerAdressSchema = SchemaFactory.createForClass(CustomerAdress)