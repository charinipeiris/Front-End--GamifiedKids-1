import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhalaComponent } from './sinhala.component';

describe('SinhalaComponent', () => {
  let component: SinhalaComponent;
  let fixture: ComponentFixture<SinhalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
