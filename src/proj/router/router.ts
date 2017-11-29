import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardChildren} from './child-routes';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {HomeComponent} from '../components/home/home.component';
import {SignupComponent} from '../components/account/signup.component';
import {SettingsComponents} from '../components/settings/settings.components';
import {SyncdataComponent} from '../components/syncdata/syncdata.component';

let routes: Routes = [
    {path: "dashboard", component: DashboardComponent, children: DashboardChildren},
    {path: "syncdata", component: SyncdataComponent},
    {path: "settings", component: SettingsComponents},
    {path: "signup", component: SignupComponent},
    {path: "home", component: HomeComponent},
    {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RouteConfig {
}
