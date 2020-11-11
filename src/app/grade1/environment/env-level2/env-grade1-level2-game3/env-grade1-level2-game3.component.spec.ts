import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level2Game3Component } from './env-grade1-level2-game3.component';

describe('EnvGrade1Level2Game3Component', () => {
  let component: EnvGrade1Level2Game3Component;
  let fixture: ComponentFixture<EnvGrade1Level2Game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level2Game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level2Game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
