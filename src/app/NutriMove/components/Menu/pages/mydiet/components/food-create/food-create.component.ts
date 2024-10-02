import {Component, EventEmitter, Output} from '@angular/core';
import {Food} from "../../model/food.entity";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-food-create',
  standalone: true,
  imports: [
    MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './food-create.component.html',
  styleUrl: './food-create.component.css'
})
export class FoodCreateComponent {
  @Output() foodAddRequested = new EventEmitter<Food>();
  @Output() cancelRequested = new EventEmitter<void>();
  foodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      calories: ['', Validators.required],
      proteins: ['', Validators.required],
      carbohydrates: ['', Validators.required],
      fats: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.foodForm.valid) {
      this.foodAddRequested.emit(this.foodForm.value);
      this.foodForm.reset();
    }
  }

  onCancel() {
    this.foodForm.reset();
    this.cancelRequested.emit();
  }

}
