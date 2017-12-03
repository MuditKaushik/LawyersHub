import { Component } from '@angular/core';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'public-client.html'),
})
export class PublicClientComponent {
    image: string = GetImages('lawyer.png');

    constructor() { }
}
