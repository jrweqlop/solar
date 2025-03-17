import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, });
  app.useWebSocketAdapter(new WsAdapter(app))
  const port = process.env.PORT ?? 4500
  await app.listen(port, () => {
    console.log('nestjs solar start port : ' + port)
  });
}
bootstrap();
