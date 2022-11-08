import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private static _handleError(err: HttpErrorResponse | any): Observable<any> {
    console.log('error: ', err);
    const errorMsg = err.error.message || 'Error: Unable to complete request.';
    return throwError(errorMsg);
  }

  //Integrate web service to Login to Admin
  logIn(body: any) {
    let url = '52.5.173.237/login.php'
    return this.http
      .post(url, body, httpOptions)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
      .pipe(catchError((error: any) => UserService._handleError(error)));
  }
}
