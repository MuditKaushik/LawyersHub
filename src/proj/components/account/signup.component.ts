import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IResponseBody, ISignupModel } from '../../models/data-models';
import { AlertTypeEnum, ErrorMessagesEnum, SuccessMessageEnum } from '../../services/Utility/enumUtil';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { AccountHttpService, CommonServices, MessageService } from '../../services/httpServices/http-services';
import httpStatus = require('http-status-codes');

@Component({
    templateUrl: GetTemplate('account', 'signup.html'),
})
export class SignupComponent implements OnInit {
    @ViewChild('submit') submitBtn: HTMLButtonElement;
    signupForm: FormGroup;
    countryList: any
    signupModel: ISignupModel = {} as ISignupModel;
    
    constructor(private fb: FormBuilder,
        private accountService: AccountHttpService,
        private commonService: CommonServices,
        private messageService: MessageService) {
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
