import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewEspacioComponent } from './components/new-espacio/new-espacio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/espacios/new', component: NewEspacioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
