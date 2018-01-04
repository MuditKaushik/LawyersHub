import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as httpStatus from 'http-status-codes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ISigninModel } from '../../../models/data-models';
import { IdentityModel } from '../../../models/data-models';
import { AccountEnums } from '../httpServicesUtility/httpEndpontsEnum';

@Injectable()
export class AccountHttpService {
    constructor(private http: HttpClient) { }
    userSignin(login: ISigninModel): Observable<HttpResponse<IdentityModel>> {
        return this.http.post<IdentityModel>(AccountEnums.tokenEndpoints, login, { observe: 'response' })
            .map((result: HttpResponse<IdentityModel>) => {
                return result;
            });
    }
}
