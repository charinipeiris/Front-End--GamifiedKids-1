import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaGrade1Level1Game4Component } from './sinhala-grade1-level1-game4.component';

describe('SinhalaGrade1Level1Game4Component', () => {
  let component: SinhalaGrade1Level1Game4Component;
  let fixture: ComponentFixture<SinhalaGrade1Level1Game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaGrade1Level1Game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaGrade1Level1Game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
