import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LqhProgressBarComponent } from './lqh-progress-bar.component';

describe('LqhProgressBarComponent', () => {
  let component: LqhProgressBarComponent;
  let fixture: ComponentFixture<LqhProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LqhProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LqhProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
