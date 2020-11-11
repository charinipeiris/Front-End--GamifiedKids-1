import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotiondetectorComponent } from './emotiondetector.component';

describe('EmotiondetectorComponent', () => {
  let component: EmotiondetectorComponent;
  let fixture: ComponentFixture<EmotiondetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotiondetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotiondetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
