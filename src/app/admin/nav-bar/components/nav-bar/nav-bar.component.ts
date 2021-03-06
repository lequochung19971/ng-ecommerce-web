import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isBrokken$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  navGroup = [
    {
      id: 'dashboard',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/dashboard'),
      routeName: 'Dashboard',
      matIcon: 'dashboard',
      url: '/admin/dashboard',
      children: [],
    },
    {
      id: 'categories',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/categories'),
      routeName: 'Categories',
      matIcon: 'category',
      url: '/admin/categories',
      children: [],
    },
    {
      id: 'authors',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/authors'),
      routeName: 'Authors',
      matIcon: 'portrait',
      url: '/admin/authors',
      children: [],
    },
    {
      id: 'publishers',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/publishers'),
      routeName: 'Publishers',
      matIcon: 'library_books',
      url: '/admin/publishers',
      children: [],
    },
    {
      id: 'suppliers',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/suppliers'),
      routeName: 'Suppliers',
      matIcon: 'library_add_check',
      url: '/admin/suppliers',
      children: [],
    },
    {
      id: 'products',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/products'),
      routeName: 'Products',
      matIcon: 'menu_book',
      url: '/admin/products',
      children: [{ routeName: 'Books', url: '/admin/products/books' }],
    },
    {
      id: 'employees',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/employees'),
      routeName: 'Employees',
      matIcon: 'assignment_ind',
      url: '/admin/employees',
      children: [],
    },
    {
      id: 'customers',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/customers'),
      routeName: 'Customers',
      matIcon: 'people',
      url: '/admin/customers',
      children: [],
    },
    {
      id: 'receipts',
      isDisabled: false,
      isExpanded: !!(this.router.url === '/admin/receipts'),
      routeName: 'Receipts',
      matIcon: 'assessment',
      url: '/admin/receipts',
      children: [],
    },
    // {
    //   id: 'products',
    //   isDisabled: false,
    //   isExpanded: !!(
    //     this.router.url === '/admin/authors' ||
    //     this.router.url === '/admin/publishers' ||
    //     this.router.url === '/admin/books'
    //   ),
    //   routeName: 'Products',
    //   matIcon: 'menu_book',
    //   url: '',
    //   children: [
    //     { routeName: 'Authors', url: '/admin/authors' },
    //     { routeName: 'Publishers', url: '/admin/publishers' },
    //     { routeName: 'Books', url: '/admin/books' },
    //   ],
    // },
  ];

  constructor(private breakpointObserver: BreakpointObserver, protected router: Router) {
    this.redirectToDashboard();
  }

  ngOnInit(): void {}

  redirectToDashboard() {
    if (this.router.url === '/admin') {
      this.router.navigateByUrl('/admin/dashboard');
    }
  }

  isOpen(panel): void {
    console.log(panel);
  }
}
