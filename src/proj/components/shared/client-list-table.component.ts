import { Component, Input } from '@angular/core';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-list-table',
    templateUrl: GetTemplate('shared', 'client-list-table.html'),
})
export class ClientListTableComponent {
    @Input('clientList') clientList: any[];
    constructor() { }
}
