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
var language_service_1 = require("./Services/language.service");
var http_1 = require("@angular/http");
var jsonload_service_1 = require("./Services/jsonload.service");
var home_component_1 = require("./Components/HomePage/home.component");
var navbar_component_1 = require("./Components/navbar.component");
var photogallery_component_1 = require("./Components/HomePage/photogallery.component");
var sidenav_component_1 = require("./Components/sidenav.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Home', component: home_component_1.HomeComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                sidenav_component_1.SideNavComponent,
                photogallery_component_1.PhotoGalleryComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [language_service_1.LanguageService, jsonload_service_1.JsonLoadService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map