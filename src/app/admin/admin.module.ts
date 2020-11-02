import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavBarComponent } from './nav-bar/components/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavBarSideBarListComponent } from './nav-bar/components/nav-bar-side-bar-list/nav-bar-side-bar-list.component';
import { NavBarProfileComponent } from './nav-bar/components/nav-bar-profile/nav-bar-profile.component';
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
import { CustomersComponent } from './customers/components/customers/customers.component';
import { CustomersTableComponent } from './customers/components/customers-table/customers-table.component';
import { CategoriesComponent } from './categories/components/categories/categories.component';
import { CategoriesFormComponent } from './categories/components/categories-form/categories-form.component';
import { CategoriesTableComponent } from './categories/components/categories-table/categories-table.component';
import { BooksComponent } from './product/books/components/books/books.component';
import { BooksTableComponent } from './product/books/components/books-table/books-table.component';
import { BooksFormComponent } from './product/books/components/books-form/books-form.component';
import { InputNumberDirective } from './shared/directives/input-number.directive';
import { DoubleClickDirective } from './shared/directives/double-click.directive';
import { InputLetterDirective } from './shared/directives/input-letter.directive';
import { InputDateDirective } from './shared/directives/input-date.directive';
import { ImageUploaderComponent } from './shared/components/image-uploader/image-uploader.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { LqhProgressBarComponent } from './shared/components/lqh-progress-bar/lqh-progress-bar.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DisableControlDirective } from './shared/directives/disable-control.directive';
import { ShellComponent } from './lqh-shell/components/shell/shell.component';
import { ShellToolbarComponent } from './lqh-shell/components/shell-toolbar/shell-toolbar.component';
import { ShellLeftSideComponent } from './lqh-shell/components/shell-left-side/shell-left-side.component';
import { ShellRightSideComponent } from './lqh-shell/components/shell-right-side/shell-right-side.component';
import { ShellLeftSideProfileComponent } from './lqh-shell/components/shell-left-side-profile/shell-left-side-profile.component';
import { ShellLeftSideNavListComponent } from './lqh-shell/components/shell-left-side-nav-list/shell-left-side-nav-list.component';

export function HttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    NavBarComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    NavBarSideBarListComponent,
    NavBarProfileComponent,
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
    CustomersComponent,
    CustomersTableComponent,
    CategoriesComponent,
    CategoriesFormComponent,
    CategoriesTableComponent,
    BooksComponent,
    BooksTableComponent,
    BooksFormComponent,
    InputNumberDirective,
    DoubleClickDirective,
    InputLetterDirective,
    InputDateDirective,
    ImageUploaderComponent,
    LoadingComponent,
    ErrorMessageComponent,
    LqhProgressBarComponent,
    PasswordInputComponent,
    DisableControlDirective,
    ShellComponent,
    ShellToolbarComponent,
    ShellLeftSideComponent,
    ShellRightSideComponent,
    ShellLeftSideProfileComponent,
    ShellLeftSideNavListComponent,
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
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AdminModule {}
