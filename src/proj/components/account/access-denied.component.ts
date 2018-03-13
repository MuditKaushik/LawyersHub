import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import httpStatus = require('http-status-codes');
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('account', 'access-denied.html'),
})
export class AccessDeniedComponent implements OnInit {
    image: string;
    accessType: string;
    reason: string;
    alertType: string;

    constructor(private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        let accessCode: number = +this.activeRoute.snapshot.params['code'];
        switch (accessCode) {
            case httpStatus.UNAUTHORIZED:
                this.alertType = 'alert alert-danger';
                this.image = GetImages('access-denied.png');
                this.accessType = 'Access Denined';
                this.reason = 'Either you are not authorised user or you have not logged in to access that page.';
                break;
            default:
                this.alertType = 'alert alert-info';
                this.image = GetImages('confused.png');
                this.accessType = 'Unknown error.';
                this.reason = 'Please contact administrator for this error. Thank you!!!!';
                break;
        }
    }
}
