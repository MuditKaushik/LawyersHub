import { Component } from '@angular/core';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'add-client.html'),
})
export class AddClientComponent {
    constructor() { }
}
