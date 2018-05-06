import { Injectable } from '@angular/core';
import { IdentityModel } from '../../../models/data-models';

@Injectable()
export class IdentityService {
    private defaultUser: IdentityModel;
    constructor() {
        this.defaultUser = {
            access_token: 'N/A',
            email: 'default',
            fullname: 'default',
            isActive: false,
            userid: 'N/A',
            username: 'default',
        };
    }
    setUserIdentity(identity: IdentityModel): void {
        localStorage.setItem('identity', JSON.stringify(identity));
    }
    clearUserIdentity(): void {
        localStorage.removeItem('identity');
    }
    getIdentity(): IdentityModel {
        let user: IdentityModel = {} as IdentityModel;
        let identity: string | null = localStorage.getItem('identity');
        if (identity !== 'undefined' && identity != null) {
            user = JSON.parse(identity as string);
        } else {
            user = this.defaultUser;
        }
        return user;
    }
}
