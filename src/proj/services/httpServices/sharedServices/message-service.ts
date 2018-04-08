import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IAlertModel } from '../../../models/data-models';
import { AlertTypeEnum } from '../../Utility/enumUtil';
@Injectable()
export class MessageService {
    private alerts = new Subject<Array<IAlertModel>>();
    constructor() { }
    /**
     * 
     * @param {AlertTypeEnum} type 
     * @param {string} message 
     * @param {string | null} icon 
     * @param {boolean} isdismissable 
     */
    addMessage(type: AlertTypeEnum, message: string, icon: string | null, isdismissable: boolean): void {
        let alert: Array<IAlertModel> = [{
            alertId: this.generateAlertIds(),
            type: type,
            message: message,
            iconClass: icon,
            dismissable: isdismissable
        }]
        this.alerts.next(alert);
    }
    getMessage(): Subject<Array<IAlertModel>> {
        return this.alerts;
    }
    /**
     * 
     * @param {number|null} alertId
     */
    clearMessages(alertId?: number): void {
        if (alertId != null) {
            this.removeAlertById(alertId);
        } else {
            this.alerts = new Subject<Array<IAlertModel>>();
        }
    }
    /**
     * accept alertId
     * @param {number} id 
     */
    private removeAlertById(id: number): void {
        this.alerts.subscribe((alerts) => {
            for (let alert of alerts) {
                if (alert.alertId === id) {
                    alerts.splice(alerts.indexOf(alert), 1);
                }
            }
        });
    }
    private generateAlertIds(): number {
        return new Date().setUTCMilliseconds(100);
    }
}