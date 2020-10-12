import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Game } from "./interfaces/game.interface";
import { CreateGameDTO } from "./dto/game.dto";

@Injectable()
export class GameService {

    constructor(
        @InjectModel('Game') private readonly gameModel: Model<Game>, 
    ) {}

    async getGames(): Promise<Game[]> {
        const  games = await this.gameModel.find()
            .populate('player1')
            .populate('player2')
            .populate('rounds')
            .populate('winner');
        return games;
    }

    async getGame(gameID: string): Promise<Game> {
        const game = await this.gameModel.findById(gameID)
            .populate('player1')
            .populate('player2')
            .populate('rounds')
            .populate('winner');
        return game;
    }

    async createGame(createGameDTO): Promise<Game> {
        const game = new this.gameModel(createGameDTO);
        return await game.save();
    }

    async deleteGame(gameID: string): Promise<Game> {
        const deletedGame = await this.gameModel.findByIdAndDelete(gameID);
        return deletedGame;
    }

    async updateGame(gameID: string, createGameDTO: CreateGameDTO): Promise<Game> {
        const updatedGame = await this.gameModel.findByIdAndUpdate(gameID, createGameDTO, { new : true, useFindAndModify: false})
            .populate('player1')
            .populate('player2')
            .populate('rounds')
            .populate('winner');
        return updatedGame;
    }


}
