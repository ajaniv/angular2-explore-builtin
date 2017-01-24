import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

    choice: number;

    constructor() {
        this.choice = 1;
    }

    ngOnInit() {
    }

    nextChoice() {
        this.choice += 1;

        if ( this.choice > 5 ) {
            this.choice = 1;
        }
    }



}
