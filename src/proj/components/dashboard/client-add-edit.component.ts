import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IClientModel } from '../../models/data-models';
import { RegexPatternEnum } from '../../services/Utility/enumUtil';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-add-edit',
    templateUrl: GetTemplate('dashboard', 'client-add-edit.html'),
})
export class ClientAddEditComponent implements OnInit {
    image: string = GetImages('lawyer.png');
    clientAddEditForm: FormGroup;
    clientModel: IClientModel = {} as IClientModel;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.createForm();
    }
    feild_Validation(): void { }
    add_update_client(model: FormGroup): void {
        console.log(this.clientAddEditForm.controls['']);
    }

    private createForm(): FormGroup {
        return this.clientAddEditForm = this.formBuilder.group({
            firstName: new FormControl(this.clientModel.firstName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            middleName: new FormControl(this.clientModel.middleName, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            lastName: new FormControl(this.clientModel.lastName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            address1: new FormControl(this.clientModel.address1, [Validators.required]),
            address2: new FormControl(this.clientModel.address2, [Validators.required]),
            state: new FormControl(this.clientModel.state, [Validators.required]),
            district: new FormControl(this.clientModel.district, [Validators.required]),
            city: new FormControl(this.clientModel.city, [Validators.required]),
            pincode: new FormControl(this.clientModel.pincode, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            email: new FormControl(this.clientModel.email, [Validators.email]),
            phone: new FormControl(this.clientModel.phone, [Validators.pattern(RegexPatternEnum.numberPattern)]),
            porpose: new FormControl(this.clientModel.purpose, [Validators.required]),
            occupation: new FormControl(this.clientModel.occupation, [Validators.required]),
            about: new FormControl(this.clientModel.about, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            isPrivate: new FormControl(this.clientModel.isPrivate = false, [Validators.required]),
        });
    }
}
