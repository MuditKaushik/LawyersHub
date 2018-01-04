import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModules } from './components/component.modules';
import { HomeComponent } from './components/home/home.component';
import { RouteConfig } from './router/router';
import { AuthInterceptor } from './services/httpInterceptor/authInterceptor';

@NgModule({
    imports: [
        ComponentModules,
        CommonModule,
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
