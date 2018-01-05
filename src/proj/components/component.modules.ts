import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDirectiveModule } from '../directives/CustomDirectiveModule';
import { RouteGaurd } from '../router/route-gaurd';
import { AuthInterceptor } from '../services/httpInterceptor/authInterceptor';
import { AccountHttpService, DashboardHttpService, IdentityService } from '../services/httpServices/http-services';
import { AccessDeniedComponent } from './account/access-denied.component';
import { LinksComponent } from './account/links.component';
import { SigninComponent } from './account/signin.component';
import { SignupComponent } from './account/signup.component';
import { AddClientComponent } from './dashboard/add-client.component';
import { ClientAddEditComponent } from './dashboard/client-add-edit.component';
import { ClientRemoveComponent } from './dashboard/client-remove.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrintClientComponent } from './dashboard/print-client.component';
import { PrivateClientComponent } from './dashboard/private-client.component';
import { PublicClientComponent } from './dashboard/public-client.component';
import { SettingsComponents } from './settings/settings.components';
import { ClientListTableComponent } from './shared/client-list-table.component';
import { LoaderComponent } from './shared/loader.component';
import { SyncdataComponent } from './syncdata/syncdata.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomDirectiveModule,
        NgbModule.forRoot(),
    ],
    exports: [
        AccessDeniedComponent,
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        LoaderComponent,
        AddClientComponent,
        PrivateClientComponent,
        PublicClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent,
        PrintClientComponent,
    ],
    declarations: [
        AccessDeniedComponent,
        DashboardComponent,
        SigninComponent,
        SignupComponent,
        SettingsComponents,
        SyncdataComponent,
        LinksComponent,
        LoaderComponent,
        AddClientComponent,
        PrivateClientComponent,
        PublicClientComponent,
        ClientAddEditComponent,
        ClientRemoveComponent,
        PrintClientComponent,
        ClientListTableComponent,
    ],
    providers: [
        AccountHttpService,
        DashboardHttpService,
        IdentityService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        RouteGaurd,
    ],
})
export class ComponentModules {
}
