import {Component} from '@angular/core';
import {GetTemplate} from '../../services/Utility/pathUtil'

@Component({
    templateUrl: GetTemplate('dashboard', 'dashboard.html')
})
export class DashboardComponent {
}
