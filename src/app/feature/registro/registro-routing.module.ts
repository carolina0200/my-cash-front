import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRegistroComponent } from './componentes/home-registro/home-registro.component';

const  routes: Routes = [
  {
    path:  '',
    component:  HomeRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
