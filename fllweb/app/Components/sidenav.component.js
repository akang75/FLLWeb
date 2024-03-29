"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.menuitems = [{ title: 'Home', routerLink: 'Home', icon: "pe-7s-home" },
            { title: 'Core Value', routerLink: 'CoreValue', icon: "pe-7s-rocket" },
            { title: 'Photos', routerLink: 'Photo', icon: "pe-7s-photo" },
            { title: 'Project', routerLink: 'Project', icon: "pe-7s-plugin" },
            { title: 'Our Team', routerLink: 'OurTeam', icon: "pe-7s-users" },
            { title: 'Contact Us', routerLink: 'About', icon: "pe-7s-mail" }];
    };
    SideNavComponent = __decorate([
        core_1.Component({
            selector: 'sidemenu',
            template: "<div class=\"sidebar-wrapper\">\n            <div class=\"logo\">\n                Welcome to CATSOP Team!\n            </div>\n           <ul class=\"nav responsive-nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuitems\">\n                    <a  [routerLink]=\"[menuItem.routerLink]\">\n                    <i class=\"{{menuItem.icon}}\"></i>\n                    <p>{{menuItem.title}}</p>\n                    </a>\n                </li>\n            </ul>\n            </div>\n    "
        })
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());
//# sourceMappingURL=sidenav.component.js.map