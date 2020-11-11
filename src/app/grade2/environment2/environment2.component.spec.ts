import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Environment2Component } from './environment2.component';

describe('Environment2Component', () => {
  let component: Environment2Component;
  let fixture: ComponentFixture<Environment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Environment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Environment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
