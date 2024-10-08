import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  private apiUrl = 'http://localhost:3000';

  protected basePath: string = `${environment.serverBasePath}`;

  protected resourceEndPoint: string = '/resources';

  protected resourcePath(): string {
    return `${this.basePath}${this.resourceEndPoint}`;
  }
  constructor(private http: HttpClient) {}

  getAll2(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath());  // Usar resourcePath en lugar de pasar el endpoint
  }

  getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`);
  }
  getById(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }
  create(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, item);
  }
  update(endpoint: string, id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, item);
  }
  delete(endpoint: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
