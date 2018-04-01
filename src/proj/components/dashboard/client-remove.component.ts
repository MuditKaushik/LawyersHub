import { Component, Input, Output,EventEmitter } from '@angular/core';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { IClientModel, IResponseBody } from '../../models/data-models';
import { DashboardHttpService } from '../../services/httpServices/http-services';

@Component({
    selector: 'client-remove',
    templateUrl: GetTemplate('dashboard', 'client-remove.html'),
})
export class ClientRemoveComponent {
    @Input('client') client: IClientModel;
    @Output('clientId') clientId = new EventEmitter<string>();
    constructor(private dashboardService: DashboardHttpService) { }
    remove(id: string): void {
        this.dashboardService.removeClient(id).subscribe((result) => {
            let response = result.body as IResponseBody<any>;
            if (response.success) {
                this.clientId.emit(id);
            } else {
            }
        });
    }
}
