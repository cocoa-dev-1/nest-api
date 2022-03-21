import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('main')
export class MainController {
  @Get()
  getAll() {
    return 'main page';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `id: ${id}`;
  }

  @Post('/:id')
  create(@Body() movieData, @Param('id') movieId: string) {
    console.log(movieData);
    return `movie created id: ${movieId}`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `movie deleted id: ${movieId}`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string) {
    return `movie updated id: ${movieId}`;
  }
}
