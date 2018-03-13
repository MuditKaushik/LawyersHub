import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../httpServicesUtility/httpErrorHandler';
import { DashboardEndpoints } from '../httpServicesUtility/httpEndpontsEnum';
import { IdentityService } from '../accountSevices/Identity-service';
import { IClientModel, IResponseBody } from '../../../models/data-models';

@Injectable()
export class DashboardHttpService {
    constructor(private http: HttpClient, private identity: IdentityService) {
    }
    getClientList(userId: string): Observable<HttpResponse<IResponseBody<IClientModel[]>>> {
        return this.http.get<IResponseBody<IClientModel[]>>(`${DashboardEndpoints.getClient}/${this.identity.getIdentity().userid}/${true}`, { observe: 'response' })
            .map((data) => {
                return data;
            }).catch(ErrorHandler);
    }
    addClient(client: IClientModel): Observable<HttpResponse<any>> {
        return this.http.post<any>(
            `${DashboardEndpoints.addClient}/${this.identity.getIdentity().userid}`,
            client,
            { observe: 'response' }
        ).map((result: HttpResponse<any>) => {
            return result;
        }).catch(ErrorHandler);;

    }
}
