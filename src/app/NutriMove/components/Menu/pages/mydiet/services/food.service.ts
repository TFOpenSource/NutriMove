import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../../../../shared/base.service';
import { Food } from '../model/food.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FoodService extends BaseService<Food> {
  public endpoint = 'food'; // Cambia a público

  constructor(protected override http: HttpClient) {
    super(http);  // Inyecta HttpClient en BaseService
    this.resourceEndPoint = '/food';  // Sobrescribe el resourceEndPoint
  }
}


