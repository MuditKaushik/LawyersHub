import { Injectable } from '@angular/core';
import { IdentityModel } from '../../../models/data-models';

@Injectable()
export class IdentityService {
    constructor() {
    }
    setUserIdentity(identity: IdentityModel): void {
        localStorage.setItem('identity', JSON.stringify(identity));
    }
    clearUserIdentity(): void {
        localStorage.removeItem('identity');
    }
    getIdentity(): IdentityModel {
        let identity: string | null = localStorage.getItem('identity');
        return JSON.parse(identity as string);
    }
}
