import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSideBarListComponent } from './nav-bar-side-bar-list.component';

describe('NavBarSideBarListComponent', () => {
  let component: NavBarSideBarListComponent;
  let fixture: ComponentFixture<NavBarSideBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSideBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSideBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
