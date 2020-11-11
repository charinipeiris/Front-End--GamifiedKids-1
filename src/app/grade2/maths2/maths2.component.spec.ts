import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maths2Component } from './maths2.component';

describe('Maths2Component', () => {
  let component: Maths2Component;
  let fixture: ComponentFixture<Maths2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maths2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maths2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
