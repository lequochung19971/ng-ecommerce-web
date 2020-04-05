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

  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
    map(result => result.matches),
    shareReplay()
  );

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
