import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { Transport } from '@nestjs/microservices'
import { RabbitMQ } from './common/constants';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Global filter Exception
  app.useGlobalFilters(new AllExceptionFilter());
  //Interceptores Globales
  app.useGlobalInterceptors(new TimeOutInterceptor());

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
