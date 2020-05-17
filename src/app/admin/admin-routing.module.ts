import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/components/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import { AuthorsComponent } from './authors/components/authors/authors.component';
import { PublishersComponent } from './publishers/components/publishers/publishers.component';
import { SuppliersComponent } from './suppliers/components/suppliers/suppliers.component';
import { CustomersComponent } from './customers/components/customers/customers.component';
import { CategoriesComponent } from './categories/components/categories/categories.component';
import { BooksComponent } from './product/books/components/books/books.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    component: NavBarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'categories', component: CategoriesComponent, data: { breadcrumb: 'Categories' } },
      { path: 'employees', component: EmployeesComponent, data: { breadcrumb: 'Employees' } },
      { path: 'customers', component: CustomersComponent, data: { breadcrumb: 'Customers' } },
      { path: 'receipts', component: DashboardComponent, data: { breadcrumb: 'Receipts' } },
      { path: 'authors', component: AuthorsComponent, data: { breadcrumb: 'Authors' } },
      { path: 'products/books', component: BooksComponent, data: { breadcrumb: 'Books' } },
      { path: 'publishers', component: PublishersComponent, data: { breadcrumb: 'Publishers' } },
      { path: 'suppliers', component: SuppliersComponent, data: { breadcrumb: 'Suppliers' } },
    ],
  },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
