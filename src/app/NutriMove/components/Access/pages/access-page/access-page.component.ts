import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../../components/login-dialog/login-dialog.component";

@Component({
  selector: 'app-access-page',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './access-page.component.html',
  styleUrl: './access-page.component.css'
})
export class AccessPageComponent {
  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px'
    });
  }
}
