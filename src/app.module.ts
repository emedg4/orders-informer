import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration';
import { InformerModule } from './informer/informer.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load:[configuration]
}),
    InformerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
