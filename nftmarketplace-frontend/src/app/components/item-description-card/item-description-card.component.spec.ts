import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescriptionCardComponent } from './item-description-card.component';

describe('ItemDescriptionCardComponent', () => {
  let component: ItemDescriptionCardComponent;
  let fixture: ComponentFixture<ItemDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDescriptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
