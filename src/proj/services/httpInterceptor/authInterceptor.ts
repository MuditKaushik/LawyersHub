import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentityService } from '../httpServices/http-services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userIdentity: IdentityService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = this.userIdentity.getIdentity();
        if (user) {
            let authRequest = req.clone({
                setHeaders: { Authorization: user.access_token },
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}
