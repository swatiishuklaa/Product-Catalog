import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signUp',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[LoginGuard]},
  {path:'details/:id',component:DetailsComponent,canActivate:[LoginGuard]},
  {path:'result/:searchText',component:ResultComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
