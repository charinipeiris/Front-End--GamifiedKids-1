import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countingconcepts1Component } from './countingconcepts1.component';

describe('Countingconcepts1Component', () => {
  let component: Countingconcepts1Component;
  let fixture: ComponentFixture<Countingconcepts1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countingconcepts1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countingconcepts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
