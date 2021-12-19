import { PipeTransform, Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<number> {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('id must positive value', 400);
    }

    return value;
  }
}
