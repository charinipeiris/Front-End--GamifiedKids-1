import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaGrade1Level1Game1Component } from './sinhala-grade1-level1-game1.component';

describe('SinhalaGrade1Level1Game1Component', () => {
  let component: SinhalaGrade1Level1Game1Component;
  let fixture: ComponentFixture<SinhalaGrade1Level1Game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaGrade1Level1Game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaGrade1Level1Game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
