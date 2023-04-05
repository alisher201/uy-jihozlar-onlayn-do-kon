import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { Card, CardSchema } from './schema/card.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Card.name,schema: CardSchema }])],
  controllers: [CardController],
  providers: [CardService]
})
export class CardModule {}
