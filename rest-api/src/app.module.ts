import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GetUserMiddleWare } from './middlewares/get-user.middleware';
import { CourseController } from './modules/courses/course.controller';
// import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './modules/courses/course.module';

@Module({
  imports: [
    CourseModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://linhpvt60:eR7LIIvTuA3du7ct@cluster0.ukwjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // ),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        // list of middlewares we want to apply in order
        GetUserMiddleWare,
      )
      .forRoutes(
        // list of controller on which middlewares being applied to
        CourseController,
      );
  }
}
