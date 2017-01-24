import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgNonBindableComponent } from './ng-non-bindable/ng-non-bindable.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarItemComponent,
    SidebarComponent,
    NgClassComponent,
    NgForComponent,
    NgNonBindableComponent,
    NgStyleComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
