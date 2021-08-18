import * as mongoose from 'mongoose';

export const generateSchema = (schema: any) => {
  return new mongoose.Schema(schema);
};

export const Db = mongoose;
