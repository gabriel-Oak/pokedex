import { Component } from '@angular/core';

import { AppService } from './core/services/app/app.service';
import { configParticles } from './core/particlesjs-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    menuState: boolean;

    width = 100;
    height = 100;
    myStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    myParams = configParticles;

    constructor(
        public app: AppService,
    ) { }

    toggleMenu() {
        this.menuState = !this.menuState;
    }

}
