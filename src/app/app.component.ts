import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ToolbarComponent} from "./NutriMove/components/Access/components/toolbar/toolbar.component";
import {FooterComponent} from "./public/footer/footer.component";
import {AccessPageComponent} from "./NutriMove/components/Access/pages/access-page/access-page.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, AccessPageComponent, MatToolbar, MatAnchor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'opensource';
  options = [
    {path: 'home', title: 'home'},
    {path: 'access', title: 'access'}
  ]
}
