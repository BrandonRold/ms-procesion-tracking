import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JornadaModule } from './jornada/jornada.module';
import { ConfigModule } from '@nestjs/config';
import { SocketsGateway } from './sockets/sockets.gateway';
import { TipoJornadaModule } from './tipo-jornada/tipo-jornada.module';
import { CarguioModule } from './carguio/carguio.module';


@Module({
  imports: [JornadaModule, ConfigModule.forRoot({isGlobal: true,}), TipoJornadaModule ,CarguioModule],
  controllers: [AppController],
  providers: [AppService, SocketsGateway],
  
})
export class AppModule {}
