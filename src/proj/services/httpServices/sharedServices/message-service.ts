import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IAlertModel } from '../../../models/data-models';
import { AlertTypeEnum, MessageTypeEnum } from '../../Utility/enumUtil';
@Injectable()
export class MessageService {
    private localMessage = new Subject<IAlertModel>();
    private globalMessage = new Subject<IAlertModel>();
    constructor() { }
    /**
     * 
     * @param {AlertTypeEnum} type 
     * @param {string} message 
     * @param {string | null} icon 
     * @param {boolean} isdismissable 
     */
    addMessage(type: AlertTypeEnum, message: string, icon: string | null, isdismissable: boolean): void {
        let alertMessage: IAlertModel = {
            alertId: this.generateAlertIds(),
            type: type,
            message: message,
            iconClass: icon,
            dismissable: isdismissable
        };
        if (isdismissable) {
            this.globalMessage.next(alertMessage);
        } else {
            this.localMessage.next(alertMessage);
        }
    }
    getMessage(messageType: MessageTypeEnum): Observable<IAlertModel> {
        return (messageType === 'global') ?
            this.globalMessage.asObservable() :
            this.localMessage.asObservable();
    }
    removeGlobalMessage() {
        this.globalMessage.next(<IAlertModel>{});
    }
    private generateAlertIds(): number {
        return new Date().setUTCMilliseconds(100);
    }
}