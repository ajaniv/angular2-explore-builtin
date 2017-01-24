import { Routes } from '@angular/router';

import { Example } from './shared/example';
import { IntroComponent } from './intro/intro.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgNonBindableComponent } from './ng-non-bindable/ng-non-bindable.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';


export const examples: Example[] = [
    { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
    { label: 'NgFor', name: 'NgFor', path: 'ng_for', component: NgForComponent },
    { label: 'NgSwitch', name: 'NgSwitch', path: 'ng_switch', component: NgSwitchComponent },
    { label: 'NgStyle', name: 'NgStyle', path: 'ng_style', component: NgStyleComponent },
    { label: 'NgClass', name: 'NgClass', path: 'ng_class', component: NgClassComponent },
    { label: 'NgNonBindable', name: 'NgNonBindable', path: 'ng_non_bindable', component: NgNonBindableComponent },
];
