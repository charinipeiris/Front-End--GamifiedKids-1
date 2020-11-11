import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Substractions1Component } from './substractions1.component';

describe('Substractions1Component', () => {
  let component: Substractions1Component;
  let fixture: ComponentFixture<Substractions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Substractions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Substractions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
