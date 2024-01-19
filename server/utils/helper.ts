import { H3Event } from "h3";
export default function response(
  statusCode: number,
  message: string,
  data: any
) {
  return {
    code: statusCode,
    message: message,
    data: data,
  };
}
