import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private endpoint: String = 'http://localhost:3000/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'auth-token'
    }),

    params: new HttpParams(),
  };

  constructor(private http: HttpClient, protected logger: LoggerService) { }

  post<T>(model: T | any, objData: T | any): Observable<T | T[]> {
    if (objData) {
      // const newObjData = new model(objData);
      const jsonData = JSON.stringify(objData);
      const url = `${this.endpoint}${model.tableName}`;

      return this.http.post<T>(url, jsonData, this.httpOptions).pipe(
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
      const url = `${this.endpoint}${model.tableName}/${objData.uuid}`;
      // const url = `${this.endpoint}${model.tableName}/zmdF-yj`;

      return this.http.put<T>(url, jsonData, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T[] | any) => {
          this.logger.LOG(res);
          return res;
        })
      );
    }
  }

  get<T>(model: T | any, query?: HttpParams | string | any, uuid?: string | any): Observable<T | T[]> {
    const httpOpts = Object.assign({}, this.httpOptions);
    let url: string;

    if (query && uuid) {
      this.logger.WARN('Just only one parameter: (query or uuid)');
      return;
    }

    if (query) {
      httpOpts.params = this.createParams(query);
      url = `${this.endpoint}${model.tableName}`;
    }

    if (uuid) {
      url = `${this.endpoint}${model.tableName}/${uuid}`;
    }

    return this.http.get<T[]>(url, httpOpts).pipe(
      catchError(this.handleError),
      tap((res: T[]) => {
        this.logger.LOG(res);
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
          this.logger.LOG(res);
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
