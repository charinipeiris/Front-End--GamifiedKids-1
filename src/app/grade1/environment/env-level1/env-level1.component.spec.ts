import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvLevel1Component } from './env-level1.component';

describe('EnvLevel1Component', () => {
  let component: EnvLevel1Component;
  let fixture: ComponentFixture<EnvLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
