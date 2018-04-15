import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IAlertModel } from '../../models/data-models';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { MessageService } from '../../services/httpServices/http-services';
@Component({
    selector: 'alert-message',
    templateUrl: GetTemplate('shared', 'alert-message.html'),
})
export class LocalMessageComponent implements OnInit {
    alert: IAlertModel = {} as IAlertModel;
    constructor(private messageService: MessageService) { }
    ngOnInit(): void {
        this.messageService.getMessage('local').subscribe((alert) => {
            this.alert = alert;
        });
    }
}