import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaGrade1Level1Game2Component } from './sinhala-grade1-level1-game2.component';

describe('SinhalaGrade1Level1Game2Component', () => {
  let component: SinhalaGrade1Level1Game2Component;
  let fixture: ComponentFixture<SinhalaGrade1Level1Game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaGrade1Level1Game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaGrade1Level1Game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
