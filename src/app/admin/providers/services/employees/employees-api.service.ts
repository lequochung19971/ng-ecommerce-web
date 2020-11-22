import { Injectable } from '@angular/core';
import { ProxyService } from '../proxy/proxy.service';
import { EmployeeBE } from '../../models/employee.model';
import { EmployeeFE } from '../../models/employee-fe.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProxyMetaParams } from '../../models/proxy-meta-params';
import { HttpResponse } from '@angular/common/http';
import { DataResponse } from '../../interface/data-response.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(protected proxy: ProxyService) {}

  callAPIToCreateEmployee(data: any): Observable<any> {
    return this.proxy.post<EmployeeBE>(EmployeeBE, data);
  }

  callAPIToFetchEmployees(query?: any): Observable<EmployeeFE[]> {
    return this.proxy.get<EmployeeBE>(EmployeeBE, query).pipe(
      map((res: EmployeeBE[]) => {
        return res.map((emp) => {
          return this.convertEmployeeBEToEmployeeFE(emp);
        }) as EmployeeFE[];
      })
    );
  }

  callAPIToFetchEmployeesForTable(query?: any): Observable<any> {
    return this.proxy.get<EmployeeBE>(EmployeeBE, query).pipe(
      map((res) => {
        const data = res.DATA.map((emp) => {
          return this.convertEmployeeBEToEmployeeFE(emp);
        }) as EmployeeFE[];
        const totalCount = res.META.totalCount;
        return { data, totalCount };
      }),
    );
  }

  callAPIToFetchEmployee(id: string) {
    return this.proxy.get<EmployeeBE>(EmployeeBE, null, { fetchByID: id } as ProxyMetaParams);
  }

  callAPIToUpdateEmployee(data: any) {
    return this.proxy.put<EmployeeBE>(EmployeeBE, data);
  }

  callAPIToDeleteEmployee(data: any) {
    return this.proxy.delete<EmployeeBE>(EmployeeBE, data);
  }

  convertEmployeeBEToEmployeeFE(employeeData: EmployeeBE) {
    return new EmployeeFE(employeeData);
  }

  convertEmployeeFEToEmployeeBE(employeeData: EmployeeFE) {
    return new EmployeeBE(employeeData);
  }
}
