import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Breadcrumb } from '../providers/models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumb$;
  homeRouteName: string;
  childRouteName: string;

  constructor(protected activatedRouter: ActivatedRoute, protected router: Router) {
    this.breadcrumb$ = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map((event) => this.buildBreadCrumb(this.activatedRouter, event))
      )
      .subscribe();
  }

  ngOnInit(): void {}

  buildBreadCrumb(route: ActivatedRoute, url, breadcrumbs: Array<Breadcrumb> = []) {
    this.homeRouteName = route.routeConfig ? route.routeConfig.data.breadcrumb : '';
    this.childRouteName = route.firstChild.routeConfig
      ? route.firstChild.routeConfig.data.breadcrumb
      : '';
    console.log(route);
  }
}
