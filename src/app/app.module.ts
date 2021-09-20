import { CanActivate } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import {appareilservice} from './service/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Authservice } from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Authguard } from './service/auth-garde.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
const appRoutes:Routes =[
{path:'appareil', component : AppareilViewComponent },
{path:'appareil',canActivate: [Authguard],component : AppareilViewComponent },

{path:'appareils/:id',
 component : SingleAppareilComponent },
{path:'auth', component : AuthComponent },
{path:'nvappareil', component : EditAppareilComponent },
{path:'not found', component : FourOhFourComponent },
{path:'**',redirectTo: '/not found'},
{path:'', component : AppareilViewComponent }];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    MyFirstComponentComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  providers:[
    appareilservice,
    Authservice,
    Authguard,
    NgForm
  ],
  imports: [ 
      BrowserModule,
      FormsModule,
     // ReactiveFormsModule,
      //AppRoutingModule
      RouterModule.forRoot(appRoutes) ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

