import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Food} from "../../model/food.entity";
import {FormBuilder, FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-food-create-and-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './food-create-and-edit.component.html',
  styleUrl: './food-create-and-edit.component.css'
})
export class FoodCreateAndEditComponent {

  //#region Attributes
  @Input() food!: Food;
  @Input() editMode: boolean = false;
  @Output() protected foodAddRequested = new EventEmitter<Food>();
  @Output() protected foodUpdateRequested = new EventEmitter<Food>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('foodForm', { static: false }) protected foodForm!: NgForm;

  //#endregion Attributes

  //#region Methods
  constructor() {
    this.food = new Food({});
  }

  private resetEditState() {
    this.food = new Food({});
    this.editMode = false;
    this.foodForm.reset();
  }

  protected  onCancel() {
    this.cancelRequested.emit();
    this.resetEditState()
  }

  private  isValid = () => this.foodForm.valid;
  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.foodUpdateRequested : this.foodAddRequested;
      emitter.emit(this.food);
      this.resetEditState();
    } else {
      console.error('Invalid from data');
    }
  }
  //#endregion Methods

}
