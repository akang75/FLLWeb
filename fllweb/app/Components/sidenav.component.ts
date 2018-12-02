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
                          {title:'Core Value', routerLink:'CoreValue', icon:"pe-7s-rocket"},
                          {title:'Photos',routerLink:'Photo', icon:"pe-7s-photo"},
                          {title:'Project',routerLink:'Project', icon:"pe-7s-plugin"},
                          {title:'Our Team',routerLink:'OurTeam', icon:"pe-7s-users"},
                          {title:'Contact Us',routerLink:'About', icon:"pe-7s-mail"}];
                                                       
        
    }
}

class MenuItem{
    title:string;
    routerLink:string;
    icon:string;
}