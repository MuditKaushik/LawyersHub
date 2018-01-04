import { Component } from '@angular/core';
import { IdentityService } from '../../services/httpServices/http-services';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'dashboard.html'),
})
export class DashboardComponent {
    constructor(private identity: IdentityService) { }
}
