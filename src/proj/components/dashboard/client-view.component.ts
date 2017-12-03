import { Component } from '@angular/core';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-view',
    templateUrl: GetTemplate('dashboard', 'client-view.html'),
})
export class ClientViewComponent {
    image: string = GetImages('lawyer.png');
    constructor() { }
}
