import { SubscribeMessage, WebSocketGateway ,MessageBody, WebSocketServer, ConnectedSocket} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';


@WebSocketGateway(8080 ,{ cors: { origin: '*' } })
export class SocketsGateway {
  
  private totalOyentes = 0;
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    this.totalOyentes++;
    console.log(`Cliente conectado: ${client.id}. Total ahora: ${this.totalOyentes}`);
    
    /* // Avisamos a todos que hay alguien nuevo
    this.server.emit('usuarios-online', this.totalOyentes); */
  }
 
  @SubscribeMessage('UpdateLocation')
  handleLocationUpdate(
    @MessageBody() data:string ,
    @ConnectedSocket() client: Socket
  ) :void {
    console.log('Mensaje de A:', data);
    this.server.emit('locationChanged', {
      aviso: 'Ubicacion actualizada',
      detalles: data
    });
 
  }

  @SubscribeMessage('b-evento')
  handleOtroEvento(
    @MessageBody() data: string  ) : void {
    console.log('Soporte recibió una actualización:', data);
  }
}
