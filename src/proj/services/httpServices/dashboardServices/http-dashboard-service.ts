import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IClientModel, IResponseBody } from '../../../models/data-models';
import { IdentityService } from '../accountSevices/Identity-service';
import { DashboardEndpoints } from '../httpServicesUtility/httpEndpontsEnum';
import { ErrorHandler } from '../httpServicesUtility/httpErrorHandler';

@Injectable()
export class DashboardHttpService {
    constructor(private http: HttpClient, private identity: IdentityService) {
    }
    getPrivateClients(userId: string): Observable<HttpResponse<IResponseBody<IClientModel[]>>> {
        return this.http.get<IResponseBody<IClientModel[]>>(
            `${DashboardEndpoints.getClient}/true/${this.identity.getIdentity().userid}`,
            { observe: 'response' })
            .map((data) => {
                return data;
            }).catch(ErrorHandler);
    }
    getPublicClients(userId: string): Observable<HttpResponse<IResponseBody<IClientModel[]>>> {
        return this.http.get<IResponseBody<IClientModel[]>>(
            `${DashboardEndpoints.getClient}/false/${this.identity.getIdentity().userid}`,
            { observe: 'response' })
            .map((data) => {
                return data;
            }).catch(ErrorHandler);
    }
    addClient(client: IClientModel): Observable<HttpResponse<any>> {
        return this.http.post<any>(
            `${DashboardEndpoints.addClient}/${this.identity.getIdentity().userid}`,
            client,
            { observe: 'response' },
        ).map((result: HttpResponse<any>) => {
            return result;
        }).catch(ErrorHandler);

    }
    removeClient(clientId: string): Observable<HttpResponse<IResponseBody<any>>> {
        return this.http.delete<IResponseBody<any>>(
            `${DashboardEndpoints.removeClient}/${clientId}/${this.identity.getIdentity().userid}`,
            { observe: 'response' })
            .map((data) => {
                return data;
            });
    }
}
