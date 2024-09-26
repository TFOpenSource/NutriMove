import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {ToolbarComponent} from "../../../../../public/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    MatToolbar,
    RouterLink,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
