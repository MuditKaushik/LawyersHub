import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import httpStatus = require('http-status-codes');
import { IResponseBody, ISignupModel } from '../../models/data-models';
import { AccountHttpService, CommonServices, MessageService } from '../../services/httpServices/http-services';
import { AlertTypeEnum, ErrorMessagesEnum, SuccessMessageEnum } from '../../services/Utility/enumUtil';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('account', 'signup.html'),
})
export class SignupComponent implements OnInit {
    @ViewChild('submit') submitBtn: HTMLButtonElement;
    signupForm: FormGroup;
    countryList: Array<any>;
    signupModel: ISignupModel = {} as ISignupModel;

    constructor(private fb: FormBuilder,
        private accountService: AccountHttpService,
        private commonService: CommonServices,
        private messageService: MessageService) {
        this.signupForm = this.createSignupform();
    }
    ngOnInit(): void {
        this.commonService.getcountries().subscribe((response) => {
            let data = response.body as IResponseBody<Array<any>>;
            this.countryList = data.result;
        });
    }
    addUser(formValue: FormGroup): void {
        if (formValue.valid) {
            this.signupModel = formValue.value;
            this.signupModel.phone = `${this.signupModel.dialCode}-${this.signupModel.phone}`;
            this.accountService.createUser(this.signupModel).subscribe((result) => {
                if (result.status === httpStatus.OK && (result.body as IResponseBody<boolean>).result) {
                    this.messageService.addMessage(
                        AlertTypeEnum.successType,
                        SuccessMessageEnum.createUserSuccess,
                        'fa fa-thumbs-o-up',
                        true);
                } else {
                    this.messageService.addMessage(
                        AlertTypeEnum.infoType,
                        ErrorMessagesEnum.USEREXISTS,
                        'fa fa-thumbs-o-down',
                        true);
                }
            });
        }
    }
    private createSignupform(): FormGroup {
        return this.fb.group({
            dialCode: new FormControl(this.signupModel.dialCode = '0', [Validators.required]),
            email: new FormControl(this.signupModel.email, [Validators.required]),
            firstName: new FormControl(this.signupModel.firstName, [Validators.required]),
            lastName: new FormControl(this.signupModel.lastName, [Validators.required]),
            middleName: new FormControl(this.signupModel.middleName),
            password: new FormControl(this.signupModel.password, [Validators.required]),
            phone: new FormControl(this.signupModel.phone, [Validators.required]),
            username: new FormControl(this.signupModel.username, [Validators.required]),
        });
    }
}
