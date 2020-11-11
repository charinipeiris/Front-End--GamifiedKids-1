import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapes1Component } from './shapes1.component';

describe('Shapes1Component', () => {
  let component: Shapes1Component;
  let fixture: ComponentFixture<Shapes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shapes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shapes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
