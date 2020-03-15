import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NavBarSideBarListComponent } from './components/nav-bar-side-bar-list/nav-bar-side-bar-list.component';
import { NavBarProfileComponent } from './components/nav-bar-profile/nav-bar-profile.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmployeesComponent } from './components/employees/components/employees/employees.component';
import { EmployeesFormComponent } from './components/employees/components/employees-form/employees-form.component';
import { EmployeesTableComponent } from './components/employees/components/employees-table/employees-table.component';
import { EmployeesSearchboxComponent } from './components/employees/components/employees-searchbox/employees-searchbox.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    NavBarSideBarListComponent,
    NavBarProfileComponent,
    TableComponent,
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesTableComponent,
    EmployeesSearchboxComponent
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AdminModule {}
