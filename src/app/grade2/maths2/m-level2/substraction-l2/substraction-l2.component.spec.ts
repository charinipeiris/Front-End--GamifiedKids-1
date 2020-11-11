import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionL2Component } from './substraction-l2.component';

describe('SubstractionL2Component', () => {
  let component: SubstractionL2Component;
  let fixture: ComponentFixture<SubstractionL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractionL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
