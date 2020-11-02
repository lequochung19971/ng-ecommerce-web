import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellToolbarComponent } from './shell-toolbar.component';

describe('ShellToolbarComponent', () => {
  let component: ShellToolbarComponent;
  let fixture: ComponentFixture<ShellToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
