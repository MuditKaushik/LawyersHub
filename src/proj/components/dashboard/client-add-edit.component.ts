import {Component} from '@angular/core';
import {GetTemplate, GetImages} from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-add-edit',
    templateUrl: GetTemplate("dashboard", "client-add-edit.html")
})
export class ClientAddEditComponent {
    image: string = GetImages("lawyer.png")

    constructor() {
    }
}