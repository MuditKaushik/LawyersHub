import { Component, OnInit } from '@angular/core';
import * as httpStatus from 'http-status-codes';
import { IAlertModel } from '../../models/data-models';
import { DashboardHttpService, IdentityService } from '../../services/httpServices/http-services';
import { GetImages, GetStyle, GetTemplate } from '../../services/Utility/pathUtil';
import { AlertTypeEnum } from '../../services/Utility/enumUtil';

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
    alert: IAlertModel = {} as IAlertModel;
    constructor(private dashboardHttp: DashboardHttpService, private identity: IdentityService) {
    }

    ngOnInit(): void {
        this.showloader = true;
        this.dashboardHttp.getClientList(this.identity.getIdentity().userid).subscribe((data) => {
            if (data.status === httpStatus.OK) {
                this.clientCount = data.body.length;
                if (this.clientCount <= 0) {
                    this.alert.type = AlertTypeEnum.infoType;
                    this.alert.message = 'No client found.';
                } else {
                    console.log(data.body);
                }
            }
        }, (err) => {
            this.alert.type = AlertTypeEnum.dangerType;
            this.alert.message = err.message;
        }, () => {
            this.showloader = false;
        });
    }
}
