import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { DashboardEnum } from '../httpServicesUtility/httpEndpontsEnum';

@Injectable()
export class DashboardHttpService {
    constructor(private http: HttpClient) {
    }
    getClientList(userId: string): Observable<HttpResponse<any>> {
        return this.http.get(`${DashboardEnum.clientEndpoints}/${userId}`, { observe: 'response' })
        .map((data) => {
            return data;
        });
    }
}
