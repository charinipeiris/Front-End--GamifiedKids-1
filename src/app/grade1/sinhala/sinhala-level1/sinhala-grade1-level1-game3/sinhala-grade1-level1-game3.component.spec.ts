import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaGrade1Level1Game3Component } from './sinhala-grade1-level1-game3.component';

describe('SinhalaGrade1Level1Game3Component', () => {
  let component: SinhalaGrade1Level1Game3Component;
  let fixture: ComponentFixture<SinhalaGrade1Level1Game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaGrade1Level1Game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaGrade1Level1Game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
