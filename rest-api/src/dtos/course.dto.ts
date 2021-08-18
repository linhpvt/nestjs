import { IsMongoId, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CourseDto {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsNumber()
  seqNo: number;
  @IsString()
  url: string;
  @IsString()
  iconUrl: string;
  @IsString()
  courseListIcon: string;
  @IsString()
  description: string;
  @IsString()
  longDescription?: string;
  @IsString()
  category: string;
  @IsNumber()
  lessonsCount: number;
  @IsBoolean()
  promo: boolean;
}
