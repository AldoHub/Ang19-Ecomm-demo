import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('intercepting request');
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      console.log('intercepted error', err);
      if(err.status === 404){
        return throwError(() => 'Not found');
      }

      return throwError(() => err.message);
    })
  );
};
