import { graphqlUploadExpress } from 'graphql-upload';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './modules/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './modules/interceptors/timeout.interceptor';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalInterceptors(new TimeoutInterceptor(), new LoggingInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  );

  app.enableCors();

  await app.listen(PORT);
}
bootstrap()
  .then((v) => {
    console.log('******** ENV ************');
    console.log('NODE_ENV :: ', process.env.NODE_ENV);
    console.log('PORT :: ', PORT);
    console.log('******** ENV ************');
    console.log(
      '\x1b[44m%s\x1b[0m',
      'DailyBee Stores GraphQL listening on http://localhost:' +
        PORT +
        '/graphql',
    );
  })
  .catch((res) => console.log('res', res));
