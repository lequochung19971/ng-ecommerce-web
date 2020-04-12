import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavBarComponent } from './nav-bar/components/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavBarSideBarListComponent } from './nav-bar/components/nav-bar-side-bar-list/nav-bar-side-bar-list.component';
import { NavBarProfileComponent } from './nav-bar/components/nav-bar-profile/nav-bar-profile.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import { EmployeesFormComponent } from './employees/components/employees-form/employees-form.component';
import { EmployeesTableComponent } from './employees/components/employees-table/employees-table.component';
import { EmployeesSearchboxComponent } from './employees/components/employees-searchbox/employees-searchbox.component';
import { AuthorsComponent } from './authors/components/authors/authors.component';
import { AuthorsFormComponent } from './authors/components/authors-form/authors-form.component';
import { AuthorsTableComponent } from './authors/components/authors-table/authors-table.component';
import { SuppliersComponent } from './suppliers/components/suppliers/suppliers.component';
import { SuppliersFormComponent } from './suppliers/components/suppliers-form/suppliers-form.component';
import { SuppliersTableComponent } from './suppliers/components/suppliers-table/suppliers-table.component';
import { PublishersComponent } from './publishers/components/publishers/publishers.component';
import { PublishersFormComponent } from './publishers/components/publishers-form/publishers-form.component';
import { PublishersTableComponent } from './publishers/components/publishers-table/publishers-table.component';
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
    EmployeesSearchboxComponent,
    AuthorsComponent,
    AuthorsFormComponent,
    AuthorsTableComponent,
    SuppliersComponent,
    SuppliersFormComponent,
    SuppliersTableComponent,
    PublishersComponent,
    PublishersFormComponent,
    PublishersTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {}
