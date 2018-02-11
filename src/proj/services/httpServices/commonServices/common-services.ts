import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as httpStatus from 'http-status-codes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CommonEndpoints } from '../httpServicesUtility/httpEndpontsEnum';

@Injectable()
export class CommonServices {
    constructor(private http: HttpClient) { }
    getcountries(): Observable<HttpResponse<any>> {
        return this.http.get(CommonEndpoints.getCountries, { observe: 'response' })
            .map((result: HttpResponse<any>) => {
                return (result.status === httpStatus.OK) ? result.body : [];
            });
    }
    getStates(): Observable<HttpResponse<Array<string>>> {
        return this.http.get(CommonEndpoints.getStates, { observe: 'response' })
            .map((result: HttpResponse<Array<string>>) => {
                return result;
            });
    }
    getCities(state: string): Observable<HttpResponse<Array<string>>> {
        return this.http.get(`${CommonEndpoints.getCities}/${state}`, { observe: 'response' })
            .map((result: HttpResponse<Array<string>>) => {
                return result;
            });
    }
}