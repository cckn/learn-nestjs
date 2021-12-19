import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private isDev = process.env.STAGE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    mongoose.set('debug', this.isDev);
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
