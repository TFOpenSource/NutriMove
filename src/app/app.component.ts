import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./NutriMove/components/Access/components/toolbar/toolbar.component";
import {FooterComponent} from "./public/footer/footer.component";
import {AccessPageComponent} from "./NutriMove/components/Access/pages/access-page/access-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, AccessPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'opensource';
}
