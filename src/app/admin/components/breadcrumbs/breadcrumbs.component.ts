import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../../models/breadcrumb';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumb$;
  homeRoute: string;
  childRoute: string;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.breadcrumb$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map(event => this.buildBreadCrumb(this.activatedRouter, event))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  buildBreadCrumb(route: ActivatedRoute, url, breadcrumbs: Array<Breadcrumb> = []) {
    // this.homeRoute = route.routeConfig.data.breadcrumb;
    // this.childRoute = route.firstChild.routeConfig.data.breadcrumb;
  }
}
