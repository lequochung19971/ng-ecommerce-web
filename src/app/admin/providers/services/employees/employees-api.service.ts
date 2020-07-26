import { Injectable } from '@angular/core';
import { ProxyService } from '../proxy/proxy.service';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(protected proxy: ProxyService) { }

  callAPIToCreateEmployee(data: any) {
    return this.proxy.post<Employee>(Employee, data);
  }

  callAPIToFetchEmployees(query?: any) {
    return this.proxy.get<Employee>(Employee, query, false);
  }

  callAPIToFetchEmployee(uuid: string) {
    return this.proxy.get<Employee>(Employee, uuid, true);
  }

  callAPIToUpdateEmployee(data: any) {
    return this.proxy.put<Employee>(Employee, data);
  }

  callAPIToDeleteEmployee(data: any) {
    return this.proxy.delete<Employee>(Employee, data);
  }
}
