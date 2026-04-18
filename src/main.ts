import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  (BigInt.prototype as any).toJSON = function () { return this.toString(); };
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // 👈 IMPORTANTE
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
