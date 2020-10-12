import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Move } from "./interfaces/move.interface";
import { CreateMoveDTO } from "./dto/move.dto";

@Injectable()
export class MoveService {

    constructor(@InjectModel('Move') private readonly moveModel: Model<Move>) {}

    async getMoves(): Promise<Move[]> {
        const  moves = await this.moveModel.find();
        return moves;
    }

    async getMove(moveID: string): Promise<Move> {
        const move = await this.moveModel.findById(moveID);
        return move;
    }

    async createMove(createMoveDTO): Promise<Move> {
        const move = new this.moveModel(createMoveDTO);
        return await move.save();
    }

    async deleteMove(moveID: string): Promise<Move> {
        const deletedMove = await this.moveModel.findByIdAndDelete(moveID);
        return deletedMove;
    }

    async updateMove(moveID: string, createMoveDTO: CreateMoveDTO): Promise<Move> {
        const updatedMove = await this.moveModel.findByIdAndUpdate(moveID, createMoveDTO, { new : true, useFindAndModify: false});
        return updatedMove;
    }


}
