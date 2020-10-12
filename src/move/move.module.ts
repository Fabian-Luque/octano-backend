import { Module } from '@nestjs/common';
import { MoveController } from './move.controller';
import { MoveService } from './move.service';
import { MongooseModule } from "@nestjs/mongoose";
import { MoveSchema } from "./schemas/move.schema";
@Module({
  imports: [
    MongooseModule.forFeature([
        {name: 'Move', schema: MoveSchema}
    ])
  ],
  controllers: [MoveController],
  providers: [MoveService]
})
export class MoveModule {}
