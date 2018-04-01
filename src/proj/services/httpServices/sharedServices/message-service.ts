import { Injectable, NgZone } from '@angular/core';
import { IAlertModel } from '../../../models/data-models';
import { AlertTypeEnum } from '../../Utility/enumUtil';

@Injectable()
export class MessageService {
    private alerts: Array<IAlertModel> = [];
    constructor(private ngzone: NgZone) { }
    addMessage(type: AlertTypeEnum, message: string, icon: string | null, isdismissable: boolean): void {
        this.alerts.push({
            alertId: this.generateAlertIds(),
            type: type,
            message: message,
            iconClass: icon,
            dismissable: isdismissable
        });
    }
    getMessage(): Array<IAlertModel> {
        return this.alerts;
    }
    clearMessages(alertId?: number): void {
        if (alertId != null) {
            this.removeAlertById(alertId);
        } else {
            this.alerts = [];
        }
    }
    private removeAlertById(id: number): void {
        for (let alert of this.alerts) {
            if (alert.alertId === id) {
                this.alerts.splice(this.alerts.indexOf(alert), 1);
            }
        }
    }
    private generateAlertIds(): number {
        return new Date().setUTCMilliseconds(100);
    }
}