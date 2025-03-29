import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, WsResponse, WsException } from '@nestjs/websockets';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Server, WebSocket } from 'ws';
import { from, map, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

// @WebSocketGateway()
@WebSocketGateway(81, { transports: ['websocket'] })
export class EventsGateway {
  constructor(private readonly eventsService: EventsService) { }

  @WebSocketServer()
  server: Server;

  // เมื่อ client เชื่อมต่อ
  handleConnection(client: WebSocket) {
    console.log('Client connected: ');
  }

  // เมื่อ client หยุดเชื่อมต่อ
  handleDisconnect(client: WebSocket) {
    console.log('Client disconnected: ');
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: unknown): string {
    
    console.log(data)
    return 'hello world'
  }


  @SubscribeMessage('message')
  async onMessage(client: WebSocket, data: Buffer) {
    // console.log(client.id)
    console.log(data.toString())
    const value = JSON.parse(data.toString())
    if (typeof value !== 'object') throw new WsException('Invalid credentials.');
    const { Volt, Current, Power } = value as {
      Volt: string,
      Current: string,
      Power: string
    }
    const item: Prisma.BasicDataCreateInput = {
      Volt,
      Current,
      Power
    }
    const result = await this.eventsService.create(item)
    if (!result) throw new WsException('Invalid credentials.');
    // if (!result) return { event: 'message', data: 'cannot create data' }
    return { event: 'message', data: 'success create data' }
  }
}
