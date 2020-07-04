import { Injectable } from '@angular/core';
import { ProxyService } from '../proxy/proxy.service';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(protected proxy: ProxyService) {}

  callAPIToCreateCustomer(data: any) {
    this.proxy.post<Employee>(Employee, data).subscribe();
  }
}
