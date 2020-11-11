import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaG1L2G3Component } from './sinhala-g1-l2-g3.component';

describe('SinhalaG1L2G3Component', () => {
  let component: SinhalaG1L2G3Component;
  let fixture: ComponentFixture<SinhalaG1L2G3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaG1L2G3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaG1L2G3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
