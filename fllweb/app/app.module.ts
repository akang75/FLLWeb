import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { HttpModule, Http } from '@angular/http';
import {HomeComponent} from './Components/HomePage/home.component';
import { NavbarComponent } from './Components/navbar.component';
import { PhotoGalleryComponent } from './Components/HomePage/photogallery.component';
import { SideNavComponent } from './Components/sidenav.component';


const appRoutes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, 
                  HomeComponent, 
                  NavbarComponent, 
                  SideNavComponent, 
                  PhotoGalleryComponent,
                ],
  bootstrap:    [ AppComponent ],  
  
})

export class AppModule { }