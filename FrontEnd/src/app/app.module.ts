import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { JSONTableModule } from 'angular-json-table'
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuardService} from './guards/auth.guard'
import {AuthenticationService} from './services/authentication.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { HelpComponent } from './components/help/help.component';
import { FeedbackComponent } from './components/feedback/feedback.component'
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {NavbarComponent} from './components/navbar/navbar.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import {ProgressBarModule} from "angular-progress-bar"
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScriptLoaderService } from './services/script-loader.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    HelpComponent,
    FeedbackComponent,
    NavbarComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProgressBarModule,
    MatProgressBarModule,
    MatCardModule,
    NgxSpinnerModule,
    JSONTableModule ,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    NgxSpinnerService,
    AuthenticationService,
    ScriptLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
