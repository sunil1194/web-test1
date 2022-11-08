import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
    let sessionAuth;
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = new HttpHeaders({
        Authorization: token || '',
        'Content-Type': 'application/json',
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }

    const cloneReq = request.clone({ headers });
    return next.handle(cloneReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        (error) => {
          if (error.status === 401) {
            sessionStorage.removeItem('access_token');
            this.router.navigate(['/login']);
          }
        }
      )
    );
  }
}
