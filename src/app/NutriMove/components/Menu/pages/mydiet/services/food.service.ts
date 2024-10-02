import { Injectable } from '@angular/core';
import {BaseService} from "../../../../../../shared/base.service";
import {Food} from "../model/food.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService extends BaseService<Food>{

  constructor(HTTP: HttpClient) {
    super(HTTP);
    this.resourceEndPoint = '/food';

  }
}
