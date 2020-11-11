import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level1Game2Component } from './env-grade1-level1-game2.component';

describe('EnvGrade1Level1Game2Component', () => {
  let component: EnvGrade1Level1Game2Component;
  let fixture: ComponentFixture<EnvGrade1Level1Game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level1Game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level1Game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
