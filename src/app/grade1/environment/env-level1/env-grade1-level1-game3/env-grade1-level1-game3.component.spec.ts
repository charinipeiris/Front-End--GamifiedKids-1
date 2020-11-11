import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGrade1Level1Game3Component } from './env-grade1-level1-game3.component';

describe('EnvGrade1Level1Game3Component', () => {
  let component: EnvGrade1Level1Game3Component;
  let fixture: ComponentFixture<EnvGrade1Level1Game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGrade1Level1Game3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGrade1Level1Game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
