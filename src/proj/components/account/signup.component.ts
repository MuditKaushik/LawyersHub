import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import httpStatus = require('http-status-codes');
import { GetTemplate } from '../../services/Utility/pathUtil';
import { AlertTypeEnum, ErrorMessagesEnum, SuccessMessageEnum } from '../../services/Utility/enumUtil';
import { IDropDownModel, ISignupModel, IAlertModel, IResponseBody } from '../../models/data-models';
import { AccountHttpService, CommonServices } from '../../services/httpServices/http-services';

@Component({
    templateUrl: GetTemplate('account', 'signup.html'),
})
export class SignupComponent implements OnInit {
    @ViewChild('submit') submitBtn: HTMLButtonElement;
    signupForm: FormGroup;
    countryList: any
    signupModel: ISignupModel = {} as ISignupModel;
    alert: IAlertModel = {} as IAlertModel;
    constructor(private fb: FormBuilder,
        private accountService: AccountHttpService,
        private commonService: CommonServices) {
        this.signupForm = this.createSignupform();
    }
    ngOnInit(): void {
        this.commonService.getcountries().subscribe((result: any) => {
            this.countryList = result.country;
        });
        console.log(this.submitBtn);
    }
    addUser(formValue: FormGroup): void {
        if (formValue.valid) {
            this.signupModel = formValue.value;
            this.signupModel.phone = `${this.signupModel.dialCode}-${this.signupModel.phone}`;
            this.accountService.createUser(this.signupModel).subscribe((result) => {
                if (result.status === httpStatus.OK && (result.body as IResponseBody<boolean>).result) {
                    this.alert = {
                        type: AlertTypeEnum.successType,
                        message: SuccessMessageEnum.createUserSuccess,
                        iconClass: 'fa-thumbs-o-up'
                    };
                } else {
                    this.alert = {
                        type: AlertTypeEnum.infoType,
                        message: ErrorMessagesEnum.USEREXISTS,
                        iconClass: 'fa-thumbs-o-down'
                    };
                }
            });
        }
    }
    private createSignupform(): FormGroup {
        return this.fb.group({
            firstName: new FormControl(this.signupModel.firstName, [Validators.required]),
            middleName: new FormControl(this.signupModel.middleName),
            lastName: new FormControl(this.signupModel.lastName, [Validators.required]),
            email: new FormControl(this.signupModel.email, [Validators.required]),
            dialCode: new FormControl(this.signupModel.dialCode = "0", [Validators.required]),
            phone: new FormControl(this.signupModel.phone, [Validators.required]),
            username: new FormControl(this.signupModel.username, [Validators.required]),
            password: new FormControl(this.signupModel.password, [Validators.required])
        });
    }
}
