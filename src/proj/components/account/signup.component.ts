import { Component, OnInit } from '@angular/core';
import * as httpStatus from 'http-status-codes';
import { GetTemplate } from '../../services/Utility/pathUtil';
import { IDropDownModel, ISignupModel } from '../../models/data-models';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountHttpService } from '../../services/httpServices/http-services';

@Component({
    templateUrl: GetTemplate('account', 'signup.html'),
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    countryList: any
    signupModel: ISignupModel = {} as ISignupModel;
    constructor(private fb: FormBuilder, private accountService: AccountHttpService) {
        this.signupForm = this.createSignupform();
    }
    ngOnInit(): void {
        this.accountService.getcountries().subscribe((result: any) => {
            this.countryList = result.country;
        });
    }
    addUser(formValue: FormGroup): void {
        if (formValue.valid) {
            this.signupModel = formValue.value;
            this.signupModel.phone = `${this.signupModel.dialCode}-${this.signupModel.phone}`;
            this.accountService.createUser(this.signupModel).subscribe((result) => {
                if (result.status === httpStatus.CREATED) {
                    //log msg to create user.
                } else {
                    // log msg not created.
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
