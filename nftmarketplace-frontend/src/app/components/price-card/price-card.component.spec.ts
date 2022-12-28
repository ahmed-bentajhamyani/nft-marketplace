import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCardComponent } from './price-card.component';

describe('PriceCardComponent', () => {
  let component: PriceCardComponent;
  let fixture: ComponentFixture<PriceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
