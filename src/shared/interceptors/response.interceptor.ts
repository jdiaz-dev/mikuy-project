import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('ResponseInterceptor');
    const statusCode = context.switchToHttp().getResponse().statusCode;

    return next.handle().pipe(
      map((respuesta) => {
        return {
          status: statusCode,
          message: 'OK',
          result: respuesta,
        };
      }),
    );
  }
}
