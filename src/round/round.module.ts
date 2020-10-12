import { Module } from '@nestjs/common';
import { RoundController } from './round.controller';
import { RoundService } from './round.service';
import { MongooseModule } from "@nestjs/mongoose";
import { RoundSchema } from "./schemas/round.schema";
import { UserSchema } from 'src/user/schemas/user.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
        {name: 'Round', schema: RoundSchema},
        {name: 'User', schema: UserSchema}
    ])
  ],
  controllers: [RoundController],
  providers: [RoundService]
})
export class RoundModule {}
