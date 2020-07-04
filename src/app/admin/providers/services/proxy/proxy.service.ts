import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  endpoint: String = '123.123.132:4200/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'auth-token'
    }),

    params: new HttpParams(),
  };

  constructor(private http: HttpClient) {}

  // POST
  post<T>(model: T | any, objData: T | any): Observable<T | T[]> {
    if (objData) {
      const newObjData = new model(objData);
      const jsonData = JSON.stringify(newObjData);
      const url = `${model.tableName}`;

      return this.http.post<T>(url, jsonData, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T[] | any) => {
          return res;
        })
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `ON BACKEND: ${error.message}`;
    }
    // return an observable with a user-facing error message
    return throwError(errorMessage);
  }
}
