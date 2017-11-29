import {Component} from '@angular/core';
import {GetTemplate, GetImages} from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate("dashboard", "privateclient.html"),
    styles: [`
        .client-name {
            cursor: pointer;
        }
    `]
})
export class PrivateClientComponent {
    loop: number = 100;
    image: string = GetImages("lawyer.png");

    constructor() {
    }
}
