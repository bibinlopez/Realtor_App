import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  @Get()
  getHomes() {
    return this.homeService.getHomes();
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
