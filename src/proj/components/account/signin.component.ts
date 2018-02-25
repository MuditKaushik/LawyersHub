import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as httpStatus from 'http-status-codes';
import { IdentityModel, ISigninModel, IResponseBody } from '../../models/data-models';
import { AccountHttpService, IdentityService } from '../../services/httpServices/http-services';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'sign-in',
    templateUrl: GetTemplate('account', 'signin.html'),
})
export class SigninComponent implements OnInit {
    @Output('authUser') authUser = new EventEmitter<IdentityModel>();
    signinForm: FormGroup;
    private signinModel: ISigninModel = {} as ISigninModel;
    constructor(private fb: FormBuilder,
        private accountHttp: AccountHttpService,
        private identity: IdentityService,
        private route: Router) { }
    ngOnInit(): void {
        this.signinForm = this.createSigninForm();
    }
    signin(model: FormGroup): void {
        if (model.valid) {
            this.accountHttp.userSignin(model.value as ISigninModel).subscribe((result) => {
                if (result.status === httpStatus.OK && result.body !== null) {
                    let identity: IResponseBody<IdentityModel> = result.body;
                    this.identity.setUserIdentity(identity.result);
                    this.authUser.emit(identity.result);
                    this.route.navigate(['/home']);
                }
            }, (err) => {
                console.log('signin result error', err);
            });
        }
    }
    private createSigninForm(): FormGroup {
        return this.fb.group({
            username: new FormControl(this.signinModel.username, [Validators.required]),
            password: new FormControl(this.signinModel.password, [Validators.required]),
        });
    }
}
