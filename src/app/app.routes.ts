import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./NutriMove/components/Menu/pages/home/home.component";
import {AccessPageComponent} from "./NutriMove/components/Access/pages/access-page/access-page.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {MydietManagementComponent} from "./NutriMove/components/Menu/pages/mydiet/pages/mydiet-page-management/mydiet-page-management.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'access', component: AccessPageComponent},
  {path: 'home/mydiet', component: MydietManagementComponent},
  {path: '', redirectTo: '/access', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent },
];

