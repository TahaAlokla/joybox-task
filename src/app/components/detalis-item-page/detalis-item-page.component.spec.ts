import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisItemPageComponent } from './detalis-item-page.component';

describe('DetalisItemPageComponent', () => {
  let component: DetalisItemPageComponent;
  let fixture: ComponentFixture<DetalisItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalisItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
