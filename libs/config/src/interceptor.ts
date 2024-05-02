import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { instanceToPlain } from 'class-transformer';

export class SuccessResponse<T> {
  readonly result: string;
  readonly data: T;

  constructor(data: T) {
    this.result = 'success';
    this.data = data;
  }
}

export class CommonResponse<T> {
  readonly result: string;
  readonly data: T;

  constructor(data: T) {
    this.result = 'success';
    this.data = data;
  }
}

@Injectable()
export class Interceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<SuccessResponse<unknown>> {
    const request = context.switchToHttp().getRequest();

    this.logger.log({
      method: request.method,
      path: request.path,
      body: request.body,
      headers: request.headers,
    });

    return next.handle().pipe(
      map((data) => new SuccessResponse(instanceToPlain(data))),
      tap((data) => this.logger.log(data)),
    );
  }
}
