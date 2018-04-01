import { Component, OnInit, NgZone } from '@angular/core';
import httpStatus = require('http-status-codes');
import { IAlertModel, IClientModel, IResponseBody } from '../../models/data-models';
import { DashboardHttpService, IdentityService, MessageService } from '../../services/httpServices/http-services';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';
import { AlertTypeEnum } from '../../services/Utility/enumUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'private-client.html')
})
export class PrivateClientComponent implements OnInit {
    clients: Array<IClientModel> = new Array<IClientModel>();
    image: string = GetImages('lawyer.png');
    showloader: boolean;
    clientCount: number = 0;
    alert: IAlertModel = {} as IAlertModel;
    constructor(private dashboardHttp: DashboardHttpService,
        private identity: IdentityService,
        private messageService: MessageService,
        private zone: NgZone) {
    }

    ngOnInit(): void {
        this.showloader = true;
        this.getClients();
    }

    removedClientId(clientId: string): void {
        if (clientId != null) {
            this.clients.filter(client => client.clientid == clientId)
                .forEach((client: IClientModel) => {
                    this.zone.run(() => {
                        this.clients.splice(this.clients.indexOf(client), 1);
                        this.messageService.addMessage(AlertTypeEnum.successType, 'Successfully Deleted', null, true);
                        // if (this.clients.length < 1) {
                        //     this.messageService.addMessage(AlertTypeEnum.infoType, 'No record found.', null, false);
                        // }
                    });
                });
        }
    }

    private getClients(): void {
        this.dashboardHttp.getPrivateClients(this.identity.getIdentity().userid).subscribe((data) => {
            let response = data.body as IResponseBody<IClientModel[]>;
            this.showloader = false;
            if (response.success) {
                this.clientCount = response.result.length;
                this.clients = response.result;
            } else {
                this.messageService.addMessage(AlertTypeEnum.infoType, <string>response.message, null, false);
            }
        }, (err) => {
            this.showloader = false;
            this.messageService.addMessage(AlertTypeEnum.dangerType, <string>err.message, null, false);
        });
    }
}
