import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EmployeesFormComponent } from './admin/employees/components/employees-form/employees-form.component';
import { AuthorsFormComponent } from './admin/authors/components/authors-form/authors-form.component';
import { PublishersFormComponent } from './admin/publishers/components/publishers-form/publishers-form.component';
import { SuppliersFormComponent } from './admin/suppliers/components/suppliers-form/suppliers-form.component';
import { CategoriesFormComponent } from './admin/categories/components/categories-form/categories-form.component';

@NgModule({
  declarations: [AppComponent, PageNotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeesFormComponent,
    AuthorsFormComponent,
    PublishersFormComponent,
    SuppliersFormComponent,
    CategoriesFormComponent,
  ],
})
export class AppModule {}
