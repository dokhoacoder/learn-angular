import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPipeComponent } from './learn-pipe.component';

describe('LearnPipeComponent', () => {
  let component: LearnPipeComponent;
  let fixture: ComponentFixture<LearnPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
