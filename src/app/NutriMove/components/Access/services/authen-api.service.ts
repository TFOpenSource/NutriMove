import { Injectable } from '@angular/core';
import {BaseService} from "../../../../shared/base.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.entity'; // Asegúrate de tener definida la entidad `User`

@Injectable({
  providedIn: 'root',
})
export class AuthenApiService {
  constructor(private baseService: BaseService<User>) {}

  // Función para autenticar usuario utilizando el BaseService
  login(email: string, password: string): Observable<User | null> {
    return this.baseService.getAll('users').pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        return user ? user : null; // Retorna el usuario si encuentra coincidencia, de lo contrario null
      })
    );
  }
}
