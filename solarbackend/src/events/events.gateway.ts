import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, WsException, OnGatewayConnection, OnGatewayDisconnect, WsResponse, ConnectedSocket } from '@nestjs/websockets';
import { EventsService } from './events.service';
import { Server, WebSocket } from 'ws';
import { OnModuleInit, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@WebSocketGateway(81, {
  cors: true,
  transports: ['websocket'],
  path: 'device',
})
export class EventsGateway implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly eventsService: EventsService) { }

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
      console.log('Received pong from client device');
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

  @SubscribeMessage('ping')
  handlePig(@ConnectedSocket() client: WebSocket) {
    client.send('pong')
  }

  @UseInterceptors(CacheInterceptor)
  @SubscribeMessage('events')
  async handleEvent(@MessageBody() data: unknown, @ConnectedSocket() client: WebSocket): Promise<WsResponse<any>> {
    if (typeof data === 'string') {
      const value = JSON.parse(data)
      if (typeof value !== 'object') throw new WsException('Invalid credentials.');
    }
    if (typeof data !== 'object') throw new WsException('Invalid credentials.');
    const thisData = data as InternetData
    await this.eventsService.SetWebsocketCache(thisData, client)
    const result = { event: 'events', data: 'success send data' }
    return result
  }

  @SubscribeMessage('keepdata')
  async handleEventUdate(@MessageBody() data: object): Promise<object> {
    if (typeof data !== 'object') throw new WsException('error data not match')
    const value = data as InternetData
    const data1 = value['DATA_ALL_HV_Inverter']
    const data2 = value['DATA_ALL_MPPT_SOLAR_CHARGER']
    if (!data1 || !data2) {
      throw new WsException('Invalid credentials.');
    }
    const result = await this.eventsService.createData(data1, data2)
    if (!result) throw new WsException('Invalid credentials.');
    return { status: 200, message: 'success' }
  }

  @SubscribeMessage('getData')
  async handleGetData(@MessageBody() data: unknown): Promise<object> {
    if (typeof data === 'object') {
      const result = await this.eventsService.getData()
      return { event: 'getData', data: result }
    }
    else return { status: 400, message: 'Bad Request Get Data' }
  }

}
