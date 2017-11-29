import {Component} from '@angular/core';
import {GetTemplate} from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate("account", "signup.html")
})
export class SignupComponent {
}