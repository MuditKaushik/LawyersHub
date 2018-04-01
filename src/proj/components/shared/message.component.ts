import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { IAlertModel } from '../../models/data-models';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { MessageService } from '../../services/httpServices/http-services';

@Component({
    selector: 'alert-message',
    templateUrl: GetTemplate('shared', 'alert-message.html'),
})
export class MessageComponent implements OnInit, OnDestroy {
    alerts: Array<IAlertModel>;
    constructor(private messageService: MessageService, private ngzone: NgZone) {
    }
    ngOnInit(): void {
        this.ngzone.run(() => {
            this.alerts = this.messageService.getMessage();
        });
    }
    ngOnDestroy(): void {
        this.messageService.clearMessages();
    }
    removeAlert(id: number): void {
        this.messageService.clearMessages(id);
    }
}