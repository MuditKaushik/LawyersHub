import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardHttpService {
    private baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = `http://services.odata.org/v4/TripPinServiceRW`;
    }

    getClientList(): Observable<any> {
        return this.http.get(this.baseUrl.concat(`/People`)).map((data: Response) => {
            return data.json() as any;
        });
    }
}
