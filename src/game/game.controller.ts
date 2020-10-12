import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateGameDTO } from "./dto/game.dto";
import { GameService } from "./game.service";


@Controller('game')
export class GameController {

    constructor(private gameService: GameService) {}
    
    @Get('/')
    async getGames(@Res() res) {
        const games = await this.gameService.getGames();
        return res.status(HttpStatus.OK).json(games);
    }

    @Get('/:gameID')
    async getGame(@Res() res, @Param('gameID') gameID) {
        const game = await this.gameService.getGame(gameID);
        if (!game) throw new NotFoundException('Game Not Found');
        return res.status(HttpStatus.OK).json(game);
    }

    @Post('/create')
    async createPost( @Res() res, @Body() createGameDTO: CreateGameDTO ) {
        const game = await this.gameService.createGame(createGameDTO);
        return res.status(HttpStatus.OK).json(game);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('gameID') gameID) {
        const game = await this.gameService.deleteGame(gameID);
        if (!game) throw new NotFoundException('Game Not Found');
        return res.status(HttpStatus.OK).json(game);
    }

    @Put('/update/:gameID')
    async updateGame(@Res() res, @Body() createGameDTO: CreateGameDTO, @Param('gameID') gameID) {
        const game = await this.gameService.updateGame(gameID, createGameDTO);
        if (!game) throw new NotFoundException('Game Not Found');
        return res.status(HttpStatus.OK).json(game);
    }

}
