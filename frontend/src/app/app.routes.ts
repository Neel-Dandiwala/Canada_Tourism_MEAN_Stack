import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CityComponent } from './components/pages/city/city.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path: 'city/:id', component: CityComponent}
];
