import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModules } from './components/component.modules';
import { HomeComponent } from './components/home/home.component';
import { RouteConfig } from './router/router';

@NgModule({
    imports: [
        ComponentModules,
        HttpModule,
        RouteConfig,
    ],
    exports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap: [
        HomeComponent,
    ],
})
export class Modules {
}
