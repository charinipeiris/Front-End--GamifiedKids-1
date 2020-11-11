import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinhala2Component } from './sinhala2.component';

describe('Sinhala2Component', () => {
  let component: Sinhala2Component;
  let fixture: ComponentFixture<Sinhala2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinhala2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinhala2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
