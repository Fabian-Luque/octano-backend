import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { MongooseModule } from "@nestjs/mongoose";
import { MoveModule } from './move/move.module';
import { RoundModule } from './round/round.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    UserModule,
    MoveModule,
    RoundModule,
    GameModule,
    MongooseModule.forRoot('mongodb://localhost/octano')
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
