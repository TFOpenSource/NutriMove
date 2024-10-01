import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.entity';
import { Router } from '@angular/router';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {ToolbarComponent} from "../../../../../../public/toolbar/toolbar.component";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  standalone: true,
  imports: [
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatButton,
    ToolbarComponent
  ],
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

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

  editProfile(): void {
    this.router.navigate(['/home/profile/edit']);
  }
}
