import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurTrucksComponent } from './pages/our-trucks/our-trucks.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-trucks', component: OurTrucksComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // fallback route
];
