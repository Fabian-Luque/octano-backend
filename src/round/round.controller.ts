import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateRoundDTO } from "./dto/round.dto";
import { RoundService } from "./round.service";


@Controller('round')
export class RoundController {

    constructor(private roundService: RoundService) {}
    
    @Get('/')
    async getRounds(@Res() res) {
        const rounds = await this.roundService.getRounds();
        return res.status(HttpStatus.OK).json(rounds);
    }

    @Get('/:roundID')
    async getRound(@Res() res, @Param('roundID') roundID) {
        const round = await this.roundService.getRound(roundID);
        if (!round) throw new NotFoundException('Round Not Found');
        return res.status(HttpStatus.OK).json(round);
    }

    @Post('/create')
    async createPost( @Res() res, @Body() createRoundDTO: CreateRoundDTO ) {
        
        const round = await this.roundService.createRound(createRoundDTO);
        return res.status(HttpStatus.OK).json(round);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('roundID') roundID) {
        const round = await this.roundService.deleteRound(roundID);
        if (!round) throw new NotFoundException('Round Not Found');
        return res.status(HttpStatus.OK).json(round);
    }

    @Put('/update/:roundID')
    async updateRound(@Res() res, @Body() createRoundDTO: CreateRoundDTO, @Param('roundID') roundID) {
        const round = await this.roundService.updateRound(roundID, createRoundDTO);
        if (!round) throw new NotFoundException('Round Not Found');
        return res.status(HttpStatus.OK).json(round);
    }

}
