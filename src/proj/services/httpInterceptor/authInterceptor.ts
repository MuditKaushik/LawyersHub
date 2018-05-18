import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { IdentityService } from '../httpServices/http-services';
import { HttpServiceTracker } from '../httpServices/sharedServices/http-service-tracker';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private httpHandler: Observable<HttpEvent<any>>;
    constructor(private userIdentity: IdentityService, private httpTracker: HttpServiceTracker) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.httpTracker.setSpinnerStatus(true);
        let user = this.userIdentity.getIdentity();
        if (user) {
            let authRequest = req.clone({
                setHeaders: { 'authorization': user.access_token },
            });
            this.httpHandler = next.handle(authRequest);
        } else {
            this.httpHandler = next.handle(req);
        }
        return this.httpHandler.do((httpReqEvent: HttpEvent<any>) => {
            if (httpReqEvent instanceof HttpResponse) {
                this.httpTracker.setSpinnerStatus(false);
            }
        }, (err) => {
            this.httpTracker.setSpinnerStatus(false);
        });
    }
}
