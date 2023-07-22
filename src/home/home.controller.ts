import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  getHomes() {
    return 'get homes';
  }

  @Get('/:id')
  getHome() {
    return 'get one home';
  }

  @Post()
  createHome() {
    return 'create home';
  }

  @Put('/:id')
  updateHome() {
    return 'update home';
  }

  @Delete('/:id')
  deleteHome() {
    return 'delete home';
  }
}
