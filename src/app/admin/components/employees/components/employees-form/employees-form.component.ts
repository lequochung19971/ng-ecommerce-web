import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {
  grids = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { text: 'Full Name', cols: 2, rows: 1, color: 'lightblue' },
          { text: 'Last Name', cols: 2, rows: 1, color: 'lightgreen' },
          { text: 'Date of birth', cols: 2, rows: 1, color: 'lightpink' },
          { text: 'Age', cols: 2, rows: 1, color: '#DDBDF1' },
          { text: 'Phone', cols: 2, rows: 1, color: 'lightblue' },
          { text: 'Gender', cols: 2, rows: 1, color: 'lightgreen' },
          { text: 'Email', cols: 2, rows: 1, color: 'lightpink' },
          { text: 'Department', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
      }
      return [
        { text: 'Full Name', cols: 1, rows: 1, color: 'lightblue' },
        { text: 'Last Name', cols: 1, rows: 1, color: 'lightgreen' },
        { text: 'Date of birth', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Age', cols: 1, rows: 1, color: '#DDBDF1' },
        { text: 'Phone', cols: 1, rows: 1, color: 'lightblue' },
        { text: 'Gender', cols: 1, rows: 1, color: 'lightgreen' },
        { text: 'Email', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Department', cols: 1, rows: 1, color: '#DDBDF1' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
