import {Component} from '@angular/core';
import {GetTemplate} from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-remove',
    templateUrl: GetTemplate("dashboard", "client-remove.html")
})
export class ClientRemoveComponent {
}