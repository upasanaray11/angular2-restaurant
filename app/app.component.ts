import { Component }                                        from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ServicesComponent }                                from './services.component';
import { ContactComponent }                                 from './contact.component';


@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS, 
    ]
})

@RouteConfig([
    {
        path: '/services',
        name: 'Services',
        component: ServicesComponent,
        useAsDefault: true
    },
    
    
    
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
])

export class AppComponent {
    title: string = "Company";
    showMenuScreen = false;

 

    MenuToggle() {
        this.showMenuScreen = !this.showMenuScreen;
        console.log("showMenuScreen: " + this.showMenuScreen);
    }

    MenuOff() {
        this.showMenuScreen = false;
    }
}
