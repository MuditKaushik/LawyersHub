import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import httpStatus = require('http-status-codes');
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ISigninModel, IdentityModel, ISignupModel, IResponseBody } from '../../../models/data-models';
import { AccountEndpoints } from '../httpServicesUtility/httpEndpontsEnum';

@Injectable()
export class AccountHttpService {
    constructor(private http: HttpClient) { }
    userSignin(login: ISigninModel): Observable<HttpResponse<IResponseBody<IdentityModel>>> {
        return this.http.post(AccountEndpoints.token, login, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<IdentityModel>>) => {
                return result;
            });
    }
    createUser(userAdd: ISignupModel): Observable<HttpResponse<IResponseBody<boolean>>> {
        return this.http.post(AccountEndpoints.addUser, userAdd, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<boolean>>) => {
                return result;
            });
    }
}
