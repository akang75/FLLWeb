import {Component} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'sidemenu',
    template: `<div class="sidebar-wrapper">
            <div class="logo">
                Welcome to ZigZag Team!
            </div>
           <ul class="nav responsive-nav">
                <li routerLinkActive="active" *ngFor="let menuItem of menuitems">
                    <a  [routerLink]="[menuItem.routerLink]">
                    <i class="{{menuItem.icon}}"></i>
                    <p>{{menuItem.title}}</p>
                    </a>
                </li>
            </ul>
            </div>
    `
})
export class SideNavComponent{
    menuitems : MenuItem[];
    subscription: Subscription;

    ngOnInit()
    {
        this.menuitems = [{title:'Home', routerLink:'Home', icon:"pe-7s-home"},
                          {title:'Meeting',routerLink:'Meeting', icon:"pe-7s-date"},
                          {title:'Church Message', routerLink:'ChurchMessage', icon:"pe-7s-pin"},
                          {title:'Videos',routerLink:'Message', icon:"pe-7s-film"},
                          {title:'Gospel',routerLink:'Gospel', icon:"pe-7s-speaker"},
                          {title:'Fellowship',routerLink:'Fellowship', icon:"pe-7s-users"},
                          {title:'About Us',routerLink:'About', icon:"pe-7s-info"}];
                                                       
        
    }
}

class MenuItem{
    title:string;
    routerLink:string;
    icon:string;
}