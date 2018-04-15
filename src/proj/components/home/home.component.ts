import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityModel } from '../../models/data-models';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';
import { IdentityService } from '../../services/httpServices/http-services';

@Component({
    selector: 'lawyer-hub',
    templateUrl: GetTemplate('home', 'home.html'),
})
export class HomeComponent implements OnInit {
    logo: string;
    isAuthUser: boolean;
    user: string;
    constructor(private identity: IdentityService, private route: Router) {
    }

    ngOnInit(): void {
        this.IsAuthenticated(this.identity.getIdentity());
        this.logo = GetImages('lawyer.png');
    }
    logout(): void {
        this.identity.clearUserIdentity();
        this.IsAuthenticated(this.identity.getIdentity());
        this.route.navigate(['/']);
    }
    IsAuthenticated(identityUser: IdentityModel): void {
        if (identityUser) {
            this.isAuthUser = identityUser.isActive;
            this.user = `${identityUser.fullName} (${identityUser.userName})`;
        }
    }
}
