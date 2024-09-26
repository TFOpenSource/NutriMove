import { Injectable } from '@angular/core';
import {BaseService} from "../../../../shared/base.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthenApiService {
  constructor(private baseService: BaseService<User>) {}


  login(email: string, password: string): Observable<User | null> {
    return this.baseService.getAll('users').pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        return user ? user : null;
      })
    );
  }

  register(user: User): Observable<User> {
    return this.baseService.create('users', user); // Usa 'users' como el endpoint
  }


  getAllUsers(): Observable<User[]> {
    return this.baseService.getAll('users');
  }

  getUserById(id: number): Observable<User> {
    return this.baseService.getById('users', id);
  }
}
