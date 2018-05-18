import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IResponseBody } from '../../../models/data-models';
import { CommonEndpoints } from '../httpServicesUtility/httpEndpontsEnum';
import { HttpServiceTracker } from '../sharedServices/http-service-tracker';

@Injectable()
export class CommonServices {
    constructor(private http: HttpClient, private serviceTracker: HttpServiceTracker) { }
    getcountries(): Observable<HttpResponse<IResponseBody<any>>> {
        // this.serviceTracker.setSpinnerStatus = true;
        return this.http.get(CommonEndpoints.getCountries, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                // this.serviceTracker.setSpinnerStatus = false;
                return result;
            });
    }
    getStates(): Observable<HttpResponse<IResponseBody<any>>> {
        // this.serviceTracker.setSpinnerStatus = true;
        return this.http.get(CommonEndpoints.getStates, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                // this.serviceTracker.setSpinnerStatus = false;
                return result;
            });
    }
    getCities(state: string): Observable<HttpResponse<IResponseBody<any>>> {
        // this.serviceTracker.setSpinnerStatus = true;
        return this.http.get(`${CommonEndpoints.getCities}/${state}`, { observe: 'response' })
            .map((result: HttpResponse<IResponseBody<any>>) => {
                // this.serviceTracker.setSpinnerStatus = false;
                return result;
            });
    }
}
