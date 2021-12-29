import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const options = {
  name: "MICROSERVICE_ONE",
  transport: Transport.REDIS,
  options: {
    url: "redis://127.0.0.1:6379",
  },
};
async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    options,
  )
  await app.listen();
}
bootstrap();
