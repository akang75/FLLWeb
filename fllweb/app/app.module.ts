import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { HttpModule, Http } from '@angular/http';
import {HomeComponent} from './Components/HomePage/home.component';
import { NavbarComponent } from './Components/navbar.component';
import { PhotoGalleryComponent } from './Components/HomePage/photogallery.component';
import { SideNavComponent } from './Components/sidenav.component';
import { PhotoComponent } from './Components/PhotoPage/photo.component';
import { AboutComponent } from './Components/AboutPage/about.component';

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Photo', component: PhotoComponent},
  { path: 'About', component: AboutComponent},
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, 
                  HomeComponent, 
                  PhotoComponent,
                  AboutComponent,
                  NavbarComponent, 
                  SideNavComponent, 
                  PhotoGalleryComponent,
                ],
  bootstrap:    [ AppComponent ],  
  
})

export class AppModule { }