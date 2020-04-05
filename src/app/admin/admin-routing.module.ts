import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
import { EmployeesComponent } from './employees/components/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    component: NavBarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'categories', component: DashboardComponent, data: { breadcrumb: 'Categories' } },
      { path: 'products', component: DashboardComponent, data: { breadcrumb: 'Products' } },
      { path: 'employees', component: EmployeesComponent, data: { breadcrumb: 'Employees' } },
      { path: 'customers', component: DashboardComponent, data: { breadcrumb: 'Customers' } },
      { path: 'receipts', component: DashboardComponent, data: { breadcrumb: 'Receipts' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
