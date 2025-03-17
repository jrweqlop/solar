import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Server, WebSocket } from 'ws';
import { from, map, Observable } from 'rxjs';
import { Prisma } from '@prisma/client';

// @WebSocketGateway()
@WebSocketGateway(8080, { transports: ['websocket'] })
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

  // @SubscribeMessage('events')
  // handleEvent(@MessageBody() data: string): string {
  //   console.log(data)
  //   return data;
  // }

  // @SubscribeMessage('events')
  // onEvent(client: WebSocket, data: any): Observable<WsResponse<number>> {
  //   console.log(data)
  //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  // }

  @SubscribeMessage('message')
  async onMessage(client: WebSocket, data: Buffer) {
    // console.log(client.id)
    console.log(data.toString())
    const value = JSON.parse(data.toString())
    if (typeof value !== 'object') throw new Error()
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
    if (!result) return { event: 'message', data: 'cannot create data' }
    return { event: 'message', data: 'success create data' }
  }
}
