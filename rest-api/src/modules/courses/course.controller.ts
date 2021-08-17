import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { COURSES } from '../../../db-data';

@Controller('/api')
export class CourseController {
  constructor() {}
  @Get('/')
  async getAllCourses(): Promise<Course> {
    return COURSES;
  }
}
