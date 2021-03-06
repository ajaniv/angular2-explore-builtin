import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Example } from './shared/example';
import { examples } from './examples';

import { IntroComponent } from './intro/intro.component';
// dynamically configure the router based on our ExampleDefs
// @TODO Error encountered resolving symbol values statically. 
//  Reference to a local (non-exported) symbol 'routes'. 
//  Consider exporting the symbol (position 24:7 in the original .ts file), 
//  resolving symbol AppRoutingModule in /Users/ajaniv/projects/angular2/builtin/src/app/app-routing.module.ts
//const mappedRoutes: Routes = examples
//    .map(( example: Example ) => ( {
//        path: example.path, component: example.component, pathMatch: 'full'
//    }) );


let routes: Routes = [];
for (let example of examples) {
    routes.push({ path: example.path, component: example.component, pathMatch: 'full' })
}

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
