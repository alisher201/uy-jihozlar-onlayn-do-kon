import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CustomerAdressService } from './customer_adress.service';
import { CustomerAdressController } from './customer_adress.controller';
import { CustomerAdress, CustomerAdressSchema } from './schema/customer_adress.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:CustomerAdress.name,schema:CustomerAdressSchema}])],
  controllers: [CustomerAdressController],
  providers: [CustomerAdressService]
})
export class CustomerAdressModule {}
