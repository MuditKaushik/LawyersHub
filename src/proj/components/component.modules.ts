import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SigninComponent} from './account/signin.component';
import {SignupComponent} from './account/signup.component';
import {LinksComponent} from './account/links.component';
import {SettingsComponents} from './settings/settings.components';
import {SyncdataComponent} from './syncdata/syncdata.component';
import {PrivateClientComponent} from './dashboard/private-client.component';
import {ClientAddEditComponent} from './dashboard/client-add-edit.component';
import {ClientRemoveComponent} from './dashboard/client-remove.component';

@NgModule({
    imports: [RouterModule, CommonModule, NgbModule.forRoot()],
    exports: [
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        PrivateClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent
    ],
    declarations: [
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        PrivateClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent
    ]
})
export class ComponentModules {
}