import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from '../components/account/access-denied.component';
import { SignupComponent } from '../components/account/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { SettingsComponents } from '../components/settings/settings.components';
import { SyncdataComponent } from '../components/syncdata/syncdata.component';
import { DashboardChildren } from './child-routes';
import { RouteGaurd } from './route-gaurd';

const routes: Routes = [
    { path: 'dashboard', canActivate: [RouteGaurd], component: DashboardComponent, children: DashboardChildren },
    { path: 'syncdata', canActivate: [RouteGaurd], component: SyncdataComponent },
    { path: 'settings', canActivate: [RouteGaurd], component: SettingsComponents },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'access_denied/:code', component: AccessDeniedComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class RouteConfig {
}
