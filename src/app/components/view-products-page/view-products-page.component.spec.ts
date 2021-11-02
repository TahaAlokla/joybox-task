import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsPageComponent } from './view-products-page.component';

describe('ViewProductsPageComponent', () => {
  let component: ViewProductsPageComponent;
  let fixture: ComponentFixture<ViewProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
