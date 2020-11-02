import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-side-bar-list',
  templateUrl: './nav-bar-side-bar-list.component.html',
  styleUrls: ['./nav-bar-side-bar-list.component.scss'],
})
export class NavBarSideBarListComponent implements OnInit {
  @Input() accordion;

  constructor() {}

  ngOnInit(): void {}
}
