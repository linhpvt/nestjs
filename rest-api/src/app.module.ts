import { Module } from '@nestjs/common';
import { CourseModule } from './modules/courses/course.module';

@Module({
  imports: [CourseModule],
})
export class AppModule {}
