import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionEditFormComponent } from './collection-edit-form.component';

describe('CollectionEditFormComponent', () => {
  let component: CollectionEditFormComponent;
  let fixture: ComponentFixture<CollectionEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
