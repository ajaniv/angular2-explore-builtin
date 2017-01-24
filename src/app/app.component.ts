import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Example } from './shared/example';

import { examples } from './examples';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    examples: Example[];

    constructor( private router: Router ) {
        this.examples = examples; // store the outer examples
    }
}
