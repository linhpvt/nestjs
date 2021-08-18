export interface ResponseDto<T> {
  code: number;
  data: T;
  messages: string[];
}
export function buildResponseDto<T>(
  code: number,
  data: T,
  messages: string[],
): ResponseDto<T> {
  const ret: ResponseDto<T> = {} as ResponseDto<T>;
  ret.code = code || 0;
  ret.data = data || null;
  ret.messages = messages || [];
  return ret;
}
