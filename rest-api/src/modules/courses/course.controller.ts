import { BadRequestException, Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { COURSES } from '../../../db-data';

@Controller()
export class CourseController {
  constructor() {}
  @Get('/')
  async getAllCourses(): Promise<Course> {
    throw new BadRequestException('Badd');
    return COURSES;
  }
}
// eR7LIIvTuA3du7ct
//
