import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InformerMicroserviceService } from './informer/microservices/informerMs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const informerMs = app.get<InformerMicroserviceService>(InformerMicroserviceService)
  const configService = app.get(ConfigService);

  app.connectMicroservice(informerMs.getOptions(configService.get('rbmq.queues.informer')));

  await app.startAllMicroservices();

  await app.listen(configService.get('app.port'));
  
}
bootstrap();
