import { Component, OnInit } from '@angular/core';
import httpStatus = require('http-status-codes');
import { IAlertModel, IClientModel, IResponseBody } from '../../models/data-models';
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
    personList: Array<IClientModel> = new Array<IClientModel>();
    image: string = GetImages('lawyer.png');
    showloader: boolean;
    clientCount: number = 0;
    alert: IAlertModel = {} as IAlertModel;
    constructor(private dashboardHttp: DashboardHttpService, private identity: IdentityService) {
    }

    ngOnInit(): void {
        this.showloader = true;
        this.dashboardHttp.getClientList(this.identity.getIdentity().userid).subscribe((data) => {
            let response = <IResponseBody<IClientModel[]>>(data.body);
            if (response.success) {
                this.clientCount = response.result.length;
                this.personList = response.result;
            } else {
                this.alert.type = AlertTypeEnum.infoType;
                this.alert.message = <string>response.message;
            }
        }, (err) => {
            this.showloader = false;
            this.alert.type = AlertTypeEnum.dangerType;
            this.alert.message = err.message;
        });
    }
}
