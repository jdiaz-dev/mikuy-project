import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('HttpException');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let message = exception.message;
    // const details = Object.entries(exception)[0][1]['errors'][0].message;
    if (exception['response']) {
      message = exception['response'].message;
    }

    return response.status(500).json({ code: status, message: message });
  }
}
