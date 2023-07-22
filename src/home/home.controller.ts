import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResponseDto } from './dto/home.dto';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHomes(): Promise<HomeResponseDto[]> {
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
