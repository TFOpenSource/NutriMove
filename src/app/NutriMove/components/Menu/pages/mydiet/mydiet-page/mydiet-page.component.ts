import {Component, inject, OnInit, ViewChild} from '@angular/core';
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
import {NgClass} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {Food} from "../model/food.entity";
import {FoodService} from "../services/food.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-mydiet-page',
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
    MatButton
  ],
  templateUrl: './mydiet-page.component.html',
  styleUrl: './mydiet-page.component.css'
})
export class MydietPageComponent  implements OnInit{
  dataSource: MatTableDataSource<Food> = new MatTableDataSource<Food>();
  columnsToDisplay: string[] = ['name', 'calories', 'proteins', 'carbohydrates', 'fats'];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getAll('food').subscribe({
      next: (foods: Food[]) => {
        this.dataSource.data = foods;
      },
      error: (error) => {
        console.error('Error fetching food data:', error);
      }
    });


  }

  addFood(): void {
    console.log("Agregar Alimento clicked");
  }


}
