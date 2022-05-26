import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./feature/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/registro/registro.module').then(m => m.RegistroModule),
    canActivate: [LoginGuard]
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
