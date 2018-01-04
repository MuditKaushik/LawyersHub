import { Component, OnInit } from '@angular/core';
import * as httpStatus from 'http-status-codes';
import { DashboardHttpService, IdentityService } from '../../services/httpServices/http-services';
import { GetImages, GetStyle, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'private-client.html'),
    styleUrls: [
        GetStyle('dashboard', 'private-public-client.css'),
    ],
})
export class PrivateClientComponent implements OnInit {
    personList: any;
    image: string = GetImages('lawyer.png');
    showloader: boolean;
    clientCount: number;
    constructor(private dashboardHttp: DashboardHttpService, private identity: IdentityService) {
    }

    ngOnInit(): void {
        this.showloader = true;
        this.dashboardHttp.getClientList(this.identity.getIdentity().UserId).subscribe((data) => {
            if (data.status === httpStatus.OK) {
                this.clientCount = data.body.length;
                console.log(data.body);
            }
        }, (err) => {
        }, () => {
            this.showloader = false;
        });
    }
}
