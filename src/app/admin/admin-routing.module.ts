import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    component: NavBarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'customer', component: DashboardComponent, data: { breadcrumb: 'Customer' } },
      { path: 'product', component: DashboardComponent, data: { breadcrumb: 'Prodcut' } },
      { path: '', redirectTo: '/admin/dashboard', data: { breadcrumb: 'Dashboard' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
