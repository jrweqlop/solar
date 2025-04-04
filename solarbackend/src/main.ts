import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, });
  app.useWebSocketAdapter(new WsAdapter(app))
  app.enableCors()
  const config = new DocumentBuilder()
    .setTitle('ECU Solar CHarge')
    .setDescription('The cats API description')
    .setVersion('1.0')
    // .addTag('nestjs ecu solar')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
        frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
      },
    },
  }));

  const port = process.env.PORT ?? 4500
  await app.listen(port, () => {
    console.log('nestjs solar start port : ' + port)
  });
}
bootstrap();
