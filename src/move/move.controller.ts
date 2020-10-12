import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateMoveDTO } from "./dto/move.dto";
import { MoveService } from "./move.service";


@Controller('move')
export class MoveController {

    constructor(private moveService: MoveService) {}
    
    @Get('/')
    async getMoves(@Res() res) {
        const moves = await this.moveService.getMoves();
        return res.status(HttpStatus.OK).json(moves);
    }

    @Get('/:moveID')
    async getMove(@Res() res, @Param('moveID') moveID) {
        const move = await this.moveService.getMove(moveID);
        if (!move) throw new NotFoundException('Move Not Found');
        return res.status(HttpStatus.OK).json(move);
    }

    @Post('/create')
    async createPost( @Res() res, @Body() createMoveDTO: CreateMoveDTO ) {
        const move = await this.moveService.createMove(createMoveDTO);
        return res.status(HttpStatus.OK).json(move);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('moveID') moveID) {
        const move = await this.moveService.deleteMove(moveID);
        if (!move) throw new NotFoundException('Move Not Found');
        return res.status(HttpStatus.OK).json(move);
    }

    @Put('/update/:moveID')
    async updateMove(@Res() res, @Body() createMoveDTO: CreateMoveDTO, @Param('moveID') moveID) {
        const move = await this.moveService.updateMove(moveID, createMoveDTO);
        if (!move) throw new NotFoundException('Move Not Found');
        return res.status(HttpStatus.OK).json(move);
    }

}
