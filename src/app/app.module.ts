import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EmployeesFormComponent } from './admin/employees/components/employees-form/employees-form.component';
import { AuthorsFormComponent } from './admin/product/authors/components/authors-form/authors-form.component';

@NgModule({
  declarations: [AppComponent, PageNotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmployeesFormComponent, AuthorsFormComponent],
})
export class AppModule {}
