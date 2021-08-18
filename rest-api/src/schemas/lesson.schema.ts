import { generateSchema, Db } from './generate-schema';
import { Lesson } from '.././../../shared/lesson';
export const LessonSchema = generateSchema({
  _id: String,
  description: String,
  duration: String,
  seqNo: Number,
  courseId: String,
});
