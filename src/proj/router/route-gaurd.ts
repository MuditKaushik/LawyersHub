import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import httpStatus = require('http-status-codes');
import { IdentityService } from '../services/httpServices/http-services';

@Injectable()
export class RouteGaurd implements CanActivate {
    constructor(private identity: IdentityService, private routes: Router) { }
    canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.validateRoute(state.url);
    }
    validateRoute(url: string): boolean {
        if (this.identity.getIdentity()) { return this.identity.getIdentity().isActive; }
        this.routes.navigate(['/access_denied', httpStatus.UNAUTHORIZED]);
        return false;
    }
}
