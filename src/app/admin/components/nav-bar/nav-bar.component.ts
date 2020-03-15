import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isBrokken$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, protected router: Router) {
    this.redirectToCurrentRoute();
  }

  ngOnInit(): void {}

  redirectToCurrentRoute() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl(currentRoute);
  }

  isOpen(panel): void {
    console.log(panel);
  }
}
