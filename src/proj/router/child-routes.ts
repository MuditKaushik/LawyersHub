import {Routes} from '@angular/router';
import {PrivateClientComponent} from '../components/dashboard/private-client.component';

export const DashboardChildren: Routes = [
    {path: 'privateclient', component: PrivateClientComponent, outlet: 'dashb'}
];