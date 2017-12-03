import { Component } from '@angular/core';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'sign-in',
    templateUrl: GetTemplate('account', 'signin.html'),
})
export class SigninComponent {
    constructor() { }
}
