import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, Subject, timer } from 'rxjs';
import { debounce, startWith, switchMap, tap } from 'rxjs/operators';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { Gender } from 'src/app/admin/providers/enum/gender.enum';
import { EmployeeFE } from 'src/app/admin/providers/models/employee-fe.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  refreshTable$: Observable<any>;
  dataSource$: Observable<EmployeeFE[]>;
  displayedColumns: string[] = [
    'fullName',
    'dob',
    'age',
    'gender',
    'department',
    'phone',
    'email',
    'action',
  ];
  constructor(protected employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.dataSource$ = this.employeesService.getEmployeesTableData();
    this.refreshTable$ = this.employeesService.refreshData; 
  }

  ngAfterViewInit(): void {
    this.setTableData();
  }

  setTableData(): void {
    merge(this.paginator.page, this.sort.sortChange, this.refreshTable$)
      .pipe(
        startWith({}),
        tap(_ => {
          const params = {
            _sort: this.sort.active || '',
            _order: this.sort.direction || '',
            _page: this.paginator.pageIndex + 1,
            _limit: this.paginator.pageSize,
          }
          this.employeesService.setEmployeesTableData(params);
        })
      ).subscribe();
  }

  tableDataLength(): number {
    return this.employeesService.getEmployeesTableDataLength();
  }

  edit(data: EmployeeFE) {
    this.employeesService.openEmployeesFormDialog(data);
  }

  delete(data: EmployeeFE) {
    this.employeesService.deleteEmployee(data).subscribe((res) => {
      this.setTableData();
    });
  }
}
