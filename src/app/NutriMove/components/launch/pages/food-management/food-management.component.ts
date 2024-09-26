import {AfterViewInit, Component, inject, OnInit, ViewChild, viewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {FoodCreateAndEditComponent} from "../../components/food-create-and-edit/food-create-and-edit.component";
import { Food } from '../../model/food.entity';
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'app-food-management',
  standalone: true,
  imports: [
    FoodCreateAndEditComponent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    FoodCreateAndEditComponent,
    MatHeaderCellDef
  ],
  templateUrl: './food-management.component.html',
  styleUrl: './food-management.component.css'
})

export class FoodManagementComponent implements OnInit, AfterViewInit{
  //#region Attributes
  protected foodData!: Food;
  protected columnsToDisplay: string[] = ['id', 'Alimento', 'Cantidad', 'Calorias', 'Azucar' ];
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort)
  protected sort!: MatSort;
  private foodService: FoodService = inject(FoodService);
  //#endregion

  //#region Methods

  //#region begin
  constructor() {
    this.editMode = false;
    this.foodData = new Food({});
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllFoods();
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  //#endregion

  //region Actions
  protected onDeleteItem(item: Food) {
    this.deleteFood(item.id);
  }

  protected onCancelRequested() {
    this.resetEditState();
    this.getAllFoods();
  }

  private resetEditState():void {
    this.foodData = new Food({});
    this.editMode = false;
  }

  protected onEditItem(item: Food) {
    this.editMode = true;
    this.foodData = item;
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

  //#endregion

  //#region CRUD
  private getAllFoods() {
    // @ts-ignore
    this.foodService.getAll2().subscribe((response: Array<Food>) => {
      this.dataSource.data = response;
      console.log(response);
    })
  }

  private deleteFood(id: number) {
    // @ts-ignore
    this.foodService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((food: Food) => food.id !== id);
    })
  }

  private createFood() {
    // @ts-ignore
    this.foodService.create(this.foodData).subscribe( (response: Food) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateFood() {
    let foodToUpdate = this.foodData;
    // @ts-ignore
    this.foodService.update(foodToUpdate.id, foodToUpdate).subscribe( (response: Food) => {
      let index = this.dataSource.data.findIndex((food: Food) => food.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    })
  }
  //#endregion

  //#endregion
}
