import { Routes } from '@angular/router';
import { AddClientComponent } from '../components/dashboard/add-client.component';
import { PrintClientComponent } from '../components/dashboard/print-client.component';
import { PrivateClientComponent } from '../components/dashboard/private-client.component';
import { PublicClientComponent } from '../components/dashboard/public-client.component';

export const DashboardChildren: Routes = [
    { path: 'privateclient', component: PrivateClientComponent, outlet: 'dashb' },
    { path: 'publicclient', component: PublicClientComponent, outlet: 'dashb' },
    { path: 'addclient', component: AddClientComponent, outlet: 'dashb' },
    { path: 'printclient', component: PrintClientComponent, outlet: 'dashb' },
];
