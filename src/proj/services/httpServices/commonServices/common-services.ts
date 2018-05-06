import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IResponseBody } from '../../../models/data-models';
import { CommonEndpoints } from '../httpServicesUtility/httpEndpontsEnum';

@Injectable()
export class CommonServices {
    constructor(private http: HttpClient) { }
    getcountries(): Observable<HttpResponse<IResponseBody<any>>> {
        return this.http.get(CommonEndpoints.getCountries, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                return result;
            });
    }
    getStates(): Observable<HttpResponse<IResponseBody<any>>> {
        return this.http.get(CommonEndpoints.getStates, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                return result;
            });
    }
    getCities(state: string): Observable<HttpResponse<IResponseBody<any>>> {
        return this.http.get(`${CommonEndpoints.getCities}/${state}`, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                return result;
            });
    }
}
