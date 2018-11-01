import { Component } from '@angular/core';
import {Language} from '../Shared/globalvarible';
import {GlobalVariable} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    
    constructor(private languageService : LanguageService)
    {
    }

    ngOnInit()
    {
       
    }
    
}
