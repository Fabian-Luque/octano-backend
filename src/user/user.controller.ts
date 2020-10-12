import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}
    
    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({ok:true, users});
    }

    @Get('/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('User Not Found');
        return res.status(HttpStatus.OK).json({ok:true, user});
    }

    @Post('/create')
    async createPost( @Res() res, @Body() createUserDTO: CreateUserDTO ) {
        const user = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({ok:true, user});
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('userID') userID) {
        const user = await this.userService.deleteUser(userID);
        if (!user) throw new NotFoundException('User Not Found');
        return res.status(HttpStatus.OK).json({ok:true, user});
    }

    @Put('/update/:userID')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('userID') userID) {
        const user = await this.userService.updateUser(userID, createUserDTO);
        if (!user) throw new NotFoundException('User Not Found');
        return res.status(HttpStatus.OK).json({ok:true, user});
    }

}
