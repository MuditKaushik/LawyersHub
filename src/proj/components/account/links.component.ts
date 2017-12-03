import { Component } from '@angular/core';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'user-links',
    templateUrl: GetTemplate('account', 'links.html'),
})
export class LinksComponent {
    constructor() { }
}
