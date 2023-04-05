import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { Discount, DiscountSchema } from './schema/discount.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Discount.name,schema:DiscountSchema}])],
  controllers: [DiscountController],
  providers: [DiscountService]
})
export class DiscountModule {}
