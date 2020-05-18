import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'dashboard', loadChildren:()=>import('./dashoard/dashboard.module').then( m => m.DashbardModule)},
  { path: 'cart-modal', loadChildren: './cart-modal/cart-modal.module#CartModalPageModule' },
  { path: 'login', component:LoginComponent },
  { path: 'sign-up', component:SignupComponent },
  { path: 'forgot-password', component:ForgotPasswordComponent },
  { path: 'help', component:HelpComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
