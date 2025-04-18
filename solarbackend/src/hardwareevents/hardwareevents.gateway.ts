import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { HardwareeventsService } from './hardwareevents.service';
import { Inject, OnModuleInit, UseInterceptors } from '@nestjs/common';
import { Server, WebSocket } from 'ws';
import { Interval } from '@nestjs/schedule';
import { CACHE_MANAGER, CacheInterceptor, } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { EventsService } from 'src/events/events.service';

@WebSocketGateway(81, {
  cors: true,
  transports: ['websocket'],
  path: 'hardware'
})
export class HardwareeventsGateway implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly hardwareeventsService: HardwareeventsService,
    private readonly eventServicees: EventsService
  ) { }

  @WebSocketServer()
  server: Server

  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  private clients: Map<WebSocket, NodeJS.Timeout> = new Map();

  // เมื่อ client เชื่อมต่อ
  handleConnection(client: WebSocket) {
    console.log('Client connected : ');
    const interval = setInterval(() => {
      if (client.readyState === WebSocket.OPEN) {
        client.ping()
      }
    }, 300000)
    this.clients.set(client, interval);
    // ถ้า client ตอบ pong กลับมา แสดงว่ายังออนไลน์อยู่
    client.on('pong', () => {
      console.log('Received pong from client hardware');
    });
  }

  // เมื่อ client หยุดเชื่อมต่อ
  handleDisconnect(client: WebSocket) {
    console.log('Client disconnected: ');
    const interval = this.clients.get(client);
    if (interval) {
      clearInterval(interval);
    }
    this.clients.delete(client);
  }

  @UseInterceptors(CacheInterceptor)
  @Interval(10000)
  async autoSend() {
    const result = await this.eventServicees.GetWebSocketCache()
    if (result.data !== null) {
      this.server.clients.forEach((client: WebSocket) => {
        client.send(JSON.stringify(result.data))
      })
    }
  }

}
