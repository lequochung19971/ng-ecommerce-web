import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSearchboxComponent } from './employees-searchbox.component';

describe('EmployeesSearchboxComponent', () => {
  let component: EmployeesSearchboxComponent;
  let fixture: ComponentFixture<EmployeesSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
