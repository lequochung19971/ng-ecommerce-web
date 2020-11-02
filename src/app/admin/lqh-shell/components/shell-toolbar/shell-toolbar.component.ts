import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'lqh-shell-toolbar',
  templateUrl: './shell-toolbar.component.html',
  styleUrls: ['./shell-toolbar.component.scss']
})
export class ShellToolbarComponent implements OnInit {
  isBrokken: Observable<boolean> = this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );

  @Input() drawerElem;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

}
