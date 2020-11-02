import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lqh-shell-left-side-nav-list',
  templateUrl: './shell-left-side-nav-list.component.html',
  styleUrls: ['./shell-left-side-nav-list.component.scss']
})
export class ShellLeftSideNavListComponent implements OnInit {
  @Input() accordion;

  constructor() { }

  ngOnInit(): void {
  }

}
