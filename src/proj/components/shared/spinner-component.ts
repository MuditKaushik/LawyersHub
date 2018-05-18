import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceTracker } from '../../services/httpServices/http-services';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'spinner',
    templateUrl: GetTemplate('shared', 'spinner.html'),
})
export class Spinner {
    constructor(private httpTracker: HttpServiceTracker) { }
    get showSpinner(): boolean {
        return this.httpTracker.getshowSpinner();
    }
}
