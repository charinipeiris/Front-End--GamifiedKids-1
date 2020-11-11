import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaG1L2G4Component } from './sinhala-g1-l2-g4.component';

describe('SinhalaG1L2G4Component', () => {
  let component: SinhalaG1L2G4Component;
  let fixture: ComponentFixture<SinhalaG1L2G4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaG1L2G4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaG1L2G4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
