import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCreateAndEditComponent } from './food-create-and-edit.component';

describe('FoodCreateAndEditComponent', () => {
  let component: FoodCreateAndEditComponent;
  let fixture: ComponentFixture<FoodCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
