import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EmployeesFormComponent } from './admin/employees/components/employees-form/employees-form.component';
import { AuthorsFormComponent } from './admin/authors/components/authors-form/authors-form.component';
import { PublishersFormComponent } from './admin/publishers/components/publishers-form/publishers-form.component';
import { SuppliersFormComponent } from './admin/suppliers/components/suppliers-form/suppliers-form.component';
import { CategoriesFormComponent } from './admin/categories/components/categories-form/categories-form.component';
import { BooksFormComponent } from './admin/product/books/components/books-form/books-form.component';
import { EmployeesService } from './admin/employees/services/employees.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent, PageNotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeesFormComponent,
    AuthorsFormComponent,
    PublishersFormComponent,
    SuppliersFormComponent,
    CategoriesFormComponent,
    BooksFormComponent,
  ],
})
export class AppModule {}
