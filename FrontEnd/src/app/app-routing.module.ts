import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuardService} from './guards/auth.guard';
import { HelpComponent } from './components/help/help.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CanvasComponent } from './components/canvas/canvas.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'canvas',component:CanvasComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:'help',component:HelpComponent},
  {path:'feedback',component:FeedbackComponent},
 


]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
