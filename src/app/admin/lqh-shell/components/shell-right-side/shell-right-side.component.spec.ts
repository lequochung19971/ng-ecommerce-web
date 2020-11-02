import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellRightSideComponent } from './shell-right-side.component';

describe('ShellRightSideComponent', () => {
  let component: ShellRightSideComponent;
  let fixture: ComponentFixture<ShellRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
