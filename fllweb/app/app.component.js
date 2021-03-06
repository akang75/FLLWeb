"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n              \n              <div class=\"wrapper\">\n                <div class=\"sidebar\" data-color=\"blue\" data-image=\"\">\n                  <sidemenu></sidemenu>\n                  <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/sidebar-5.jpg)\"></div>\n                </div>  \n                <div class=\"main-panel\">\n                  <navbar-cmp></navbar-cmp>\n                  <router-outlet></router-outlet>\n                </div>\n              </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map