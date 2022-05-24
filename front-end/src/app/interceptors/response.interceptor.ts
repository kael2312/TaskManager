import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        catchError((error) => {
            if(error instanceof HttpErrorResponse){
                switch (error.status) {
                    case 401:
                        console.log(error);
                        alert('401 UnAuthorized')
                        break;
                
                    default:
                        break;
                }
            }
            return throwError(() => error);
        })
    );
  }
}
