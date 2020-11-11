import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level1Game1Component } from './env-grade1-level1-game1.component';

describe('EnvGrade1Level1Game1Component', () => {
  let component: EnvGrade1Level1Game1Component;
  let fixture: ComponentFixture<EnvGrade1Level1Game1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level1Game1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level1Game1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
