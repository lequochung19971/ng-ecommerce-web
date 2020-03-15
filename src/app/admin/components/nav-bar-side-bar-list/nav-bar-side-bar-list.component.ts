import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-side-bar-list',
  templateUrl: './nav-bar-side-bar-list.component.html',
  styleUrls: ['./nav-bar-side-bar-list.component.scss']
})
export class NavBarSideBarListComponent implements OnInit {
  accordionList = [
    {
      id: 'panel-1',
      isHideToggle: true,
      isDisabled: false,
      isExpanded: false,
      routeName: 'Dashboard',
      url: '/admin/dashboard',
      children: []
    },
    {
      id: 'panel-2',
      isHideToggle: false,
      isDisabled: false,
      isExpanded: false,
      routeName: 'List Route',
      url: null,
      children: [
        { routeName: 'Route 1', url: '/admin/route1' },
        { routeName: 'Route 2', url: '/admin/route2' },
        { routeName: 'Route 3', url: '/admin/route3' }
      ]
    },
    {
      id: 'panel-3',
      isHideToggle: false,
      isDisabled: false,
      isExpanded: false,
      routeName: 'List Route',
      url: '',
      children: [
        { routeName: 'Route 1', url: '/admin/route1' },
        { routeName: 'Route 2', url: '/admin/route2' },
        { routeName: 'Route 3', url: '/admin/route3' }
      ]
    },
    {
      id: 'panel-2',
      isHideToggle: false,
      isDisabled: false,
      isExpanded: false,
      routeName: 'List Route',
      url: null,
      children: [
        { routeName: 'Route 1', url: '/admin/route1' },
        { routeName: 'Route 2', url: '/admin/route2' },
        { routeName: 'Route 3', url: '/admin/route3' }
      ]
    },
    {
      id: 'panel-2',
      isHideToggle: false,
      isDisabled: false,
      isExpanded: false,
      routeName: 'List Route',
      url: null,
      children: [
        { routeName: 'Route 1', url: '/admin/route1' },
        { routeName: 'Route 2', url: '/admin/route2' },
        { routeName: 'Route 3', url: '/admin/route3' }
      ]
    },
    {
      id: 'panel-2',
      isHideToggle: false,
      isDisabled: false,
      isExpanded: false,
      routeName: 'List Route',
      url: null,
      children: [
        { routeName: 'Route 1', url: '/admin/route1' },
        { routeName: 'Route 2', url: '/admin/route2' },
        { routeName: 'Route 3', url: '/admin/route3' }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
