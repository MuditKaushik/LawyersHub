import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAlertModel } from '../../models/data-models';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { MessageService } from '../../services/httpServices/http-services';

@Component({
    selector: 'alert-message',
    templateUrl: GetTemplate('shared', 'alert-message.html'),
})
export class MessageComponent implements OnInit, OnDestroy {
    alerts: Array<IAlertModel>;
    dockerAlerts: Array<IAlertModel>;

    constructor(private messageService: MessageService) { }
    ngOnInit(): void {
        this.fetchMessages();
    }
    ngOnDestroy(): void {
        this.messageService.clearMessages();
    }
    removeAlert(id: number): void {
        this.dockerAlerts.map((alert: IAlertModel) => {
            if (alert.alertId === id) {
                this.dockerAlerts.splice(this.dockerAlerts.indexOf(alert), 1);
                this.messageService.clearMessages(alert.alertId);
            }
        });
    }
    private fetchMessages(): void {
        this.messageService.getMessage().subscribe((alerts: Array<IAlertModel>) => {
            this.alerts = alerts.filter(messages => messages.dismissable == false);
            this.dockerAlerts = alerts.filter(messages => messages.dismissable == true);
        });
    }
}