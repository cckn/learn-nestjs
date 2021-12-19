import { LoggingInterceptor } from './../common/interceptors/success.interceptor';
import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  @Get()
  getCurrentCat() {
    return 'getCurrentCat';
  }

  @Get()
  signUp() {
    return 'signUp';
  }

  @Get()
  logIn() {
    return 'logIn';
  }

  @Get()
  logOut() {
    return 'logOut';
  }

  @Post()
  uploadCatImg() {
    return 'uploadCatImg';
  }
}
