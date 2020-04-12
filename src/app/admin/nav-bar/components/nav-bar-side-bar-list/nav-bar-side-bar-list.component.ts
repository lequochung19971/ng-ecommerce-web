import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-side-bar-list',
  templateUrl: './nav-bar-side-bar-list.component.html',
  styleUrls: ['./nav-bar-side-bar-list.component.scss'],
})
export class NavBarSideBarListComponent implements OnInit {
  accordionList = [
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
      matIcon: 'create',
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
      children: [],
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

  constructor(protected router: Router) {}

  ngOnInit(): void {}
}
