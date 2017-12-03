import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../components/account/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { SettingsComponents } from '../components/settings/settings.components';
import { SyncdataComponent } from '../components/syncdata/syncdata.component';
import { DashboardChildren } from './child-routes';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, children: DashboardChildren },
    { path: 'syncdata', component: SyncdataComponent },
    { path: 'settings', component: SettingsComponents },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class RouteConfig {
}
