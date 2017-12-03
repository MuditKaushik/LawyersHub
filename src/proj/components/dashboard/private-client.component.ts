import { Component } from '@angular/core';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'private-client.html'),
    styles: [`
        .client-name {
            cursor: pointer;
        }
    `],
})
export class PrivateClientComponent {
    loop: number = 100;
    image: string = GetImages('lawyer.png');

    constructor() {
    }
}
