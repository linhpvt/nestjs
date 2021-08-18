import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CourseDto } from '../../dtos/course.dto';
import { ToIntergerPipe } from '../../pipes/to-integer.pipe';
import { Course } from '../../../../shared/course';
import { COURSES } from '../../../db-data';

@Controller('course')
export class CourseController {
  constructor() {}
  @Get('/')
  async getAllCourses(): Promise<Course> {
    // throw new Error('Badd');
    // throw new BadRequestException('BadRequestException');
    return COURSES;
  }
  @Put('/:courseId')
  async updateCourse(
    @Param('courseId', ToIntergerPipe) courseId: number,
    @Body() changes: CourseDto,
  ) {
    const message = `courseId = ${courseId}, type: ${typeof courseId}`;
    return { message, body: changes };
  }

  // to get class-validator effect, user CourseDto instead of Partial<CourseDto)
  @Post()
  async createCourse(@Body() changes: CourseDto) {
    return { body: changes };
  }
}
// eR7LIIvTuA3du7ct
//
