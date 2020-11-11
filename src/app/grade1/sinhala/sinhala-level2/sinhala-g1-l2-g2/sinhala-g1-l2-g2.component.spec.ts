import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaG1L2G2Component } from './sinhala-g1-l2-g2.component';

describe('SinhalaG1L2G2Component', () => {
  let component: SinhalaG1L2G2Component;
  let fixture: ComponentFixture<SinhalaG1L2G2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaG1L2G2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaG1L2G2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
