import { HttpExceptionFilter } from './../http-exception.filter';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Put,
  UseFilters,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getAllCat() {
    throw new HttpException('error test', 400);

    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
