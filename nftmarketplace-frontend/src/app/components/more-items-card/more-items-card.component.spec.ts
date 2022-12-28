import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreItemsCardComponent } from './more-items-card.component';

describe('MoreItemsCardComponent', () => {
  let component: MoreItemsCardComponent;
  let fixture: ComponentFixture<MoreItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreItemsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
