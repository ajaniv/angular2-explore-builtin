import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Example } from '../shared/example';

@Component( {
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {

    @Input( 'item' ) item: Example;

    constructor( private router: Router,
        private route: ActivatedRoute,
        private location: Location ) {
    }

    ngOnInit() {
    }

    // Checks if this current example is the selected one
    isActive(): boolean {
        return `/${this.item.path}` === this.location.path();
    }

}
