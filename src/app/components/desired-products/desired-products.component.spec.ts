import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredProductsComponent } from './desired-products.component';

describe('DesiredProductsComponent', () => {
  let component: DesiredProductsComponent;
  let fixture: ComponentFixture<DesiredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesiredProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
