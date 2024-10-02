import {AfterViewInit, Component, inject, OnInit, viewChild, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {NgClass, NgIf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {Food} from "../model/food.entity";
import {FoodService} from "../services/food.service";
import {MatButton} from "@angular/material/button";
import {ToolbarComponent} from "../../../../../../public/toolbar/toolbar.component";
import {RouterOutlet} from "@angular/router";
import {FoodCreateComponent} from "../components/food-create/food-create.component";


@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    MatPaginator,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatSortHeader,
    MatSort,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatCard,
    MatCardContent,
    MatRow,
    MatButton,
    ToolbarComponent,
    RouterOutlet,
    NgIf,
    FoodCreateComponent
  ],
  templateUrl: './mydiet-page.component.html',
  styleUrl: './mydiet-page.component.css'
})
export class MydietPageComponent  implements OnInit, AfterViewInit{

  //#region Attributes
  protected foodData!: Food;
  protected columnsToDisplay: string[] = ['name', 'calories', 'proteins', 'carbohydrates', 'fats'];
  protected editMode: boolean = false;
  protected showCreateForm: boolean = false;
  protected dataSource = new MatTableDataSource<Food>();
  @ViewChild(MatSort)
  protected sort!: MatSort;
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  private foodService: FoodService = inject(FoodService);
  protected totalStats = {
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
  };

  //#end region

  //#Region Methods
  constructor() {
    this.foodData = new Food({});
    this.editMode = false;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllFoods();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected onEditItem(item: Food) {
    this.editMode = true;
    this.foodData = item;
  }
  protected resetEditState():void {
    this.foodData = new Food({});
    this.editMode = false;
  }

  protected onCancelRequested():void {
    this.resetEditState();
    this.getAllFoods();
  }

  protected onDeleteItem(item: Food) {
    this.deleteFood(item.id);
  }

  protected onFoodUpdateRequested(item: Food) {
    this.foodData = item;
    this.updateFood();
    this.resetEditState();
  }

  protected onFoodAddRequested(item: Food) {
    this.foodData = item;
    this.createFood();
    this.resetEditState();
  }
  protected toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
  }
  protected onFoodAdded(newFood: Food): void {
    this.foodService.create('food', newFood).subscribe((response: Food) => {
      this.dataSource.data.push(response);
      this.dataSource.data = [...this.dataSource.data];
      this.toggleCreateForm();
      this.calculateTotalStats();
    });
  }
  protected onCancel(): void {
    this.toggleCreateForm();
  }

  //#end region

  //#Region CRUD
  private getAllFoods() {
    this.foodService.getAll('food').subscribe((response: Array<Food>) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.calculateTotalStats();

    });
  }

  private createFood() {
    this.foodService.create('food', this.foodData).subscribe((response: Food) => {
      this.dataSource.data.push(response);
      this.dataSource.data = [...this.dataSource.data];
      this.calculateTotalStats();
    });
  }

  private updateFood() {
    this.foodService.update('food', this.foodData.id, this.foodData).subscribe((response: Food) => {
      const index = this.dataSource.data.findIndex(food => food.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = [...this.dataSource.data];
    });
  }

  private deleteFood(id: number) {
    this.foodService.delete('food', id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(food => food.id !== id);
    });
  }

  private calculateTotalStats() {
    this.totalStats = {
      calories: 0,
      proteins: 0,
      carbohydrates: 0,
      fats: 0,
    };

    this.dataSource.data.forEach((food: Food) => {
      this.totalStats.calories += Math.trunc(food.calories);
      this.totalStats.proteins += Math.trunc(food.proteins);
      this.totalStats.carbohydrates += Math.trunc(food.carbohydrates);
      this.totalStats.fats += Math.trunc(food.fats);
    });

  }
  //#end region
}
