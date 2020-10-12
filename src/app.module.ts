import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { MongooseModule } from "@nestjs/mongoose";
import { MoveModule } from './move/move.module';
import { RoundModule } from './round/round.module';
import { GameModule } from './game/game.module';
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;
@Module({
  imports: [
    UserModule,
    MoveModule,
    RoundModule,
    GameModule,
    MongooseModule.forRoot(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`)
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
