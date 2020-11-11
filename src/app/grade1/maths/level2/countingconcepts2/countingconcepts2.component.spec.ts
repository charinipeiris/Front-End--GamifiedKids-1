import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countingconcepts2Component } from './countingconcepts2.component';

describe('Countingconcepts2Component', () => {
  let component: Countingconcepts2Component;
  let fixture: ComponentFixture<Countingconcepts2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countingconcepts2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countingconcepts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
