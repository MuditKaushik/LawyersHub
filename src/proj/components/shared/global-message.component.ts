import { Component, OnInit } from '@angular/core';
import { IAlertModel } from '../../models/data-models';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { MessageService } from '../../services/httpServices/http-services';
@Component({
    selector: 'global-message',
    templateUrl: GetTemplate('shared', 'global-message.html')
})
export class GlobalMessageComponent implements OnInit {
    globalMessage: IAlertModel = {} as IAlertModel;
    constructor(private messageService: MessageService) { }
    ngOnInit(): void {
        this.messageService.getMessage('global').subscribe((message) => {
            this.globalMessage = message;
            if (message.message != null) {
                setTimeout(() => {
                    this.messageService.removeGlobalMessage();
                }, 5500);
            }
        });
    }
}