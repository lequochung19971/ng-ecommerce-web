import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLeftSideProfileComponent } from './shell-left-side-profile.component';

describe('ShellLeftSideProfileComponent', () => {
  let component: ShellLeftSideProfileComponent;
  let fixture: ComponentFixture<ShellLeftSideProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLeftSideProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLeftSideProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
