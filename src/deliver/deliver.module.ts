import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DeliverService } from './deliver.service';
import { DeliverController } from './deliver.controller';
import { Deliver, DeliverSchema } from './schema/deliver.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Deliver.name,schema:DeliverSchema}])],
  controllers: [DeliverController],
  providers: [DeliverService]
})
export class DeliverModule {}
