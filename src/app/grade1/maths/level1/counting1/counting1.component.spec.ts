import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counting1Component } from './counting1.component';

describe('Counting1Component', () => {
  let component: Counting1Component;
  let fixture: ComponentFixture<Counting1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Counting1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counting1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
