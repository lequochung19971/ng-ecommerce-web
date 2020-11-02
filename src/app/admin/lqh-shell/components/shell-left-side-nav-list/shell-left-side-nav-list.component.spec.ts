import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLeftSideNavListComponent } from './shell-left-side-nav-list.component';

describe('ShellLeftSideNavListComponent', () => {
  let component: ShellLeftSideNavListComponent;
  let fixture: ComponentFixture<ShellLeftSideNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLeftSideNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLeftSideNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
