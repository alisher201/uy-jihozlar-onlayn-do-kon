import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer, CustomerSchema } from './schema/customer.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Customer.name,schema:CustomerSchema}])],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
