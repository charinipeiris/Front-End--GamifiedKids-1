import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaLevel1Component } from './sinhala-level1.component';

describe('SinhalaLevel1Component', () => {
  let component: SinhalaLevel1Component;
  let fixture: ComponentFixture<SinhalaLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
