import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lqh-progress-bar',
  templateUrl: './lqh-progress-bar.component.html',
  styleUrls: ['./lqh-progress-bar.component.scss'],
})
export class LqhProgressBarComponent implements OnInit {
  errorColor: string = '#F44336';
  warningColor: string = '#FFC107';
  successColor: string = '#4CAF50';
  bar: any;
  progress: any;
  constructor() {}

  ngOnInit(): void {
    // const bar = document.getElementById('lqh-bar');
    // const progress = document.getElementById('lqh-progress');
    // bar.style.opacity = '0.3';
    // bar.style.backgroundColor = this.errorColor;
    // bar.style.borderColor = this.errorColor;
    // progress.style.width = '20px';
    // progress.style.backgroundColor = this.errorColor;
    // progress.style.borderColor = this.errorColor;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    const bar = document.getElementById('lqh-bar');
    const progress = document.getElementById('lqh-progress');
    if (!bar || !progress) {
      return;
    }

    bar.style.opacity = '0.3';
    bar.style.backgroundColor = this.errorColor;
    bar.style.borderColor = this.errorColor;

    progress.style.width = '20px';
    progress.style.backgroundColor = this.errorColor;
    progress.style.borderColor = this.errorColor;
  }
}
