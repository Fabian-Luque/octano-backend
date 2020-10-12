import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Round } from "./interfaces/round.interface";
import { CreateRoundDTO } from "./dto/round.dto";

@Injectable()
export class RoundService {

    constructor(
        @InjectModel('Round') private readonly roundModel: Model<Round>, 
    ) {}

    async getRounds(): Promise<Round[]> {
        const  rounds = await this.roundModel.find()
            .populate('player1')
            .populate('player2')
            .populate('player1move')
            .populate('player2move')
            .populate('winner');
        return rounds;
    }

    async getRound(roundID: string): Promise<Round> {
        const round = await this.roundModel.findById(roundID)
            .populate('player1')
            .populate('player2')
            .populate('player1move')
            .populate('player2move')
            .populate('winner');
        return round;
    }

    async createRound(createRoundDTO): Promise<Round> {
        // La logica puede ir aqui
        const round = new this.roundModel(createRoundDTO);
        return await round.save();
    }

    async deleteRound(roundID: string): Promise<Round> {
        const deletedRound = await this.roundModel.findByIdAndDelete(roundID);
        return deletedRound;
    }

    async updateRound(roundID: string, createRoundDTO: CreateRoundDTO): Promise<Round> {
        const updatedRound = await this.roundModel.findByIdAndUpdate(roundID, createRoundDTO, { new : true, useFindAndModify: false})
            .populate('player1')
            .populate('player2')
            .populate('player1move')
            .populate('player2move')
            .populate('winner');
        return updatedRound;
    }


}
