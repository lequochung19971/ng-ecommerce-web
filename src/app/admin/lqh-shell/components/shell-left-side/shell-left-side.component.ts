import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lqh-shell-left-side',
  templateUrl: './shell-left-side.component.html',
  styleUrls: ['./shell-left-side.component.scss']
})
export class ShellLeftSideComponent implements OnInit {
  @Input() accordion;

  constructor() { }

  ngOnInit(): void {
  }

}
