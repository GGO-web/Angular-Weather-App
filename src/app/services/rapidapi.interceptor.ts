import {
   HttpErrorResponse,
   HttpEvent,
   HttpHandler,
   HttpHeaders,
   HttpInterceptor,
   HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RapidAPIInterceptor implements HttpInterceptor {
   intercept(
      req: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      const cloneReq = req.clone({
         headers: new HttpHeaders().set(
            environment.XRapidAPIKey.name,
            environment.XRapidAPIKey.value
         )
      });

      return next.handle(cloneReq);
   }
}
