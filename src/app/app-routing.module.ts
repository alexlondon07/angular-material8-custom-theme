import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { BuildingParametersComponent } from './pages/building-parameters/building-parameters.component';


const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'parametros-de-obra', component: BuildingParametersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
