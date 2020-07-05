import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private endpoint: String = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'auth-token'
    }),

    params: new HttpParams(),
  };

  constructor(private http: HttpClient) {}

  post<T>(model: T | any, objData: T | any): Observable<T | T[]> {
    if (objData) {
      // const newObjData = new model(objData);
      const jsonData = JSON.stringify(objData);
      const url = `${this.endpoint}${model.tableName}`;

      return this.http.post<T | T[]>(url, jsonData, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T[] | any) => {
          return res;
        })
      );
    }
  }

  put<T>(model: T | any, objData: T | any): Observable<T | T[]> {
    if (objData) {
      // const newObjData = new model(objData);
      const jsonData = JSON.stringify(objData);
      // const url = `${this.endpoint}${model.tableName}/${objData.uuid}`;
      const url = `${this.endpoint}${model.tableName}/zmdF-yj`;

      return this.http.put<T | T[]>(url, jsonData, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T[] | any) => {
          return res;
        })
      );
    }
  }

  get<T>(model: T | any, query?: HttpParams | string | any): Observable<T | T[]> {
    const httpOpts = Object.assign({}, this.httpOptions);

    if (query) {
      httpOpts.params = this.createParams(query);
    }

    const url = `${this.endpoint}${model.tableName}`;

    return this.http.get<T[]>(url, httpOpts).pipe(
      catchError(this.handleError),
      tap((res: T[]) => {
        return res;
      })
    );
  }

  delete<T>(model: T | any, objData: T | any): Observable<T | T[]> {
    if (objData) {
      const url = `${this.endpoint}${model.tableName}/${objData.uuid}`;
      // const url = `${this.endpoint}${model.tableName}/zmdF-yj`;

      return this.http.delete<T | T[]>(url, this.httpOptions).pipe(
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

  private createParams(query: HttpParams | string | any): HttpParams {
    let newParams = new HttpParams();

    if (typeof query === 'string') {
      let stringParams = new HttpParams();
      const splitQuery = query.split('&');
      splitQuery.forEach((param) => {
        const pairOfKeyValue = param.split('=');
        stringParams = stringParams.set(pairOfKeyValue[0], pairOfKeyValue[1]);
      });

      newParams = stringParams;
    } else if (typeof query === 'object') {
      Object.keys(query).forEach((key) => {
        newParams = newParams.set(key, query[key]);
      });
    } else if (query instanceof HttpParams) {
      newParams = query;
    }

    return newParams;
  }
}
