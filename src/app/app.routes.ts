import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./NutriMove/components/Menu/pages/home/home.component";
import {AccessPageComponent} from "./NutriMove/components/Access/pages/access-page/access-page.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {FoodManagementComponent} from "./NutriMove/components/launch/pages/food-management/food-management.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'access', component: AccessPageComponent},
  {path: 'home/food', component: FoodManagementComponent},
  { path: '', redirectTo: '/access', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent },
];

