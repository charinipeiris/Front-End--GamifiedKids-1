import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaG1L2G1Component } from './sinhala-g1-l2-g1.component';

describe('SinhalaG1L2G1Component', () => {
  let component: SinhalaG1L2G1Component;
  let fixture: ComponentFixture<SinhalaG1L2G1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaG1L2G1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaG1L2G1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
