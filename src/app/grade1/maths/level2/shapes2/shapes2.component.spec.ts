import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapes2Component } from './shapes2.component';

describe('Shapes2Component', () => {
  let component: Shapes2Component;
  let fixture: ComponentFixture<Shapes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shapes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shapes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
