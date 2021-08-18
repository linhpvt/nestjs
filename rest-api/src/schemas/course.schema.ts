import { generateSchema } from './generate-schema';

export const CourseSchema = generateSchema({
  _id: String,
  seqNo: Number,
  url: String,
  iconUrl: String,
  courseListIcon: String,
  description: String,
  longDescription: String,
  category: String,
  lessonsCount: Number,
  promo: Boolean,
});
