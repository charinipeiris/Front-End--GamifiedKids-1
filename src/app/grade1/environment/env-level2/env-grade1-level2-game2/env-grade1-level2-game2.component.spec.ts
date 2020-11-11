import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level2Game2Component } from './env-grade1-level2-game2.component';

describe('EnvGrade1Level2Game2Component', () => {
  let component: EnvGrade1Level2Game2Component;
  let fixture: ComponentFixture<EnvGrade1Level2Game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level2Game2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level2Game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
