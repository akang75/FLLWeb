"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var home_component_1 = require("./Components/HomePage/home.component");
var navbar_component_1 = require("./Components/navbar.component");
var photogallery_component_1 = require("./Components/HomePage/photogallery.component");
var sidenav_component_1 = require("./Components/sidenav.component");
var photo_component_1 = require("./Components/PhotoPage/photo.component");
var about_component_1 = require("./Components/AboutPage/about.component");
var corevalue_component_1 = require("./Components/CoreValuePage/corevalue.component");
var ourteam_component_1 = require("./Components/OurTeamPage/ourteam.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'Photo', component: photo_component_1.PhotoComponent },
    { path: 'About', component: about_component_1.AboutComponent },
    { path: 'CoreValue', component: corevalue_component_1.CoreValueComponent },
    { path: 'OurTeam', component: ourteam_component_1.OurTeamComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                photo_component_1.PhotoComponent,
                about_component_1.AboutComponent,
                navbar_component_1.NavbarComponent,
                sidenav_component_1.SideNavComponent,
                photogallery_component_1.PhotoGalleryComponent,
                corevalue_component_1.CoreValueComponent,
                ourteam_component_1.OurTeamComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map