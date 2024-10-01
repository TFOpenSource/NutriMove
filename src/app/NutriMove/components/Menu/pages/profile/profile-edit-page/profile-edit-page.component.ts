import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.entity';
import { Router } from '@angular/router';
import {ToolbarComponent} from "../../../../../../public/toolbar/toolbar.component";
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  standalone: true,
  imports: [
    ToolbarComponent,
    FormsModule,
    MatRadioButton,
    MatRadioGroup,
    MatButton
  ],
  styleUrls: ['./profile-edit-page.component.css']
})
export class ProfileEditPageComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe({
      next: (userData: User) => {
        this.user = userData;
      },
      error: (error) => {
        console.error('Error fetching user profile:', error);
      }
    });
  }

  saveChanges(): void {
    this.userService.updateUserProfile(this.user).subscribe({
      next: () => {
        console.log('Perfil actualizado exitosamente');
        this.router.navigate(['/home/profile']); // Guardado
      },
      error: (error) => {
        console.error('Error al actualizar el perfil:', error);
      }
    });
  }

  cancelEdit(): void {
    this.router.navigate(['/home/profile']); // Cacncela
  }
}
