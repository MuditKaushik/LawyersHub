import { Injectable } from '@angular/core';
import { IdentityModel } from '../../../models/data-models';

@Injectable()
export class IdentityService {
    private defaultUser: IdentityModel;
    constructor() {
        this.defaultUser = {
            userName: 'default',
            isActive: false,
            email: 'default',
            fullName: 'default',
            access_token: 'N/A',
            userid: 'N/A'
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
        if (identity != 'undefined' && identity != null) {
            user = <IdentityModel>JSON.parse(identity as string)
        } else {
            user = this.defaultUser;
        }
        return user;
    }
}
