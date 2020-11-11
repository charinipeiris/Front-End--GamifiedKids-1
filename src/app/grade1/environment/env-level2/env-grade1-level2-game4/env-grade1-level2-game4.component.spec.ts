import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level2Game4Component } from './env-grade1-level2-game4.component';

describe('EnvGrade1Level2Game4Component', () => {
  let component: EnvGrade1Level2Game4Component;
  let fixture: ComponentFixture<EnvGrade1Level2Game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level2Game4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level2Game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
