import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

// custom pipe to transform a string to number
export class ToIntergerPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): number {
    console.log(metadata);
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException(
        `Conversion to number failed, value: ${value}`,
      );
    }
    return val;
  }
}
