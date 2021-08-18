import { Module } from '@nestjs/common';
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
export class AppModule {}
