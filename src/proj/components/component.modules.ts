import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinksComponent } from './account/links.component';
import { SigninComponent } from './account/signin.component';
import { SignupComponent } from './account/signup.component';
import { AddClientComponent } from './dashboard/add-client.component';
import { ClientAddEditComponent } from './dashboard/client-add-edit.component';
import { ClientRemoveComponent } from './dashboard/client-remove.component';
import { ClientViewComponent } from './dashboard/client-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateClientComponent } from './dashboard/private-client.component';
import { PublicClientComponent } from './dashboard/public-client.component';
import { SettingsComponents } from './settings/settings.components';
import { SyncdataComponent } from './syncdata/syncdata.component';

@NgModule({
    imports: [RouterModule, CommonModule, NgbModule.forRoot()],
    exports: [
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        AddClientComponent,
        PrivateClientComponent,
        PublicClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent,
        ClientViewComponent,
    ],
    declarations: [
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        AddClientComponent,
        PrivateClientComponent,
        PublicClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent,
        ClientViewComponent,
    ],
})
export class ComponentModules {
}
