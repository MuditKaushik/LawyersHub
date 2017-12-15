import { Component } from '@angular/core';
import { GetImages, GetStyle, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'public-client.html'),
    styleUrls: [
        GetStyle('dashboard', 'public-private-client.css'),
    ],
})
export class PublicClientComponent {
    image: string = GetImages('lawyer.png');
    constructor() { }
}
