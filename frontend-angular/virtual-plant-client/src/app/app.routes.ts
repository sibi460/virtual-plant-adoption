import { Routes } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';

export const routes: Routes = [
  { path: 'plants', component: PlantListComponent },
  { path: 'plants/:id', component: PlantDetailComponent },
  { path: '', redirectTo: 'plants', pathMatch: 'full' },
  { path: '**', redirectTo: 'plants' }
];
