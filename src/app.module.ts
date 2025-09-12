import { Module } from '@nestjs/common';
import { CreditCardController } from './controller/creditCard.Controller';
import { VisaCardService } from './services/visaCard.service';
import { MastercardCardService } from './services/mastercadCard.service';

@Module({
  imports: [],
  controllers: [CreditCardController],
  providers: [VisaCardService, MastercardCardService],
})
export class AppModule {}
