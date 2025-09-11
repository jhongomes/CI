import { Module } from '@nestjs/common';
import { CreditCardController } from './controller/creditCard.Controller';

@Module({
  imports: [],
  controllers: [CreditCardController],
  providers: [],
})
export class AppModule {}
