import { Component } from '@angular/core';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('settings', 'settings.html'),
})
export class SettingsComponents {
    constructor() { }
}
