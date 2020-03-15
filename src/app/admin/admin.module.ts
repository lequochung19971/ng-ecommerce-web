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

@NgModule({
  declarations: [NavBarComponent, DashboardComponent, BreadcrumbsComponent, NavBarSideBarListComponent, NavBarProfileComponent, TableComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AdminModule {}
