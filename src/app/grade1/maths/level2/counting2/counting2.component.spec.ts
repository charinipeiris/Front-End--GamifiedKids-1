import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counting2Component } from './counting2.component';

describe('Counting2Component', () => {
  let component: Counting2Component;
  let fixture: ComponentFixture<Counting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Counting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
