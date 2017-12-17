import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IClientModel, ILocation } from '../../models/data-models';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';
import { RegexPatternEnum } from '../../services/Utility/patternUtil';

@Component({
    selector: 'client-add-edit',
    templateUrl: GetTemplate('dashboard', 'client-add-edit.html'),
})
export class ClientAddEditComponent implements OnInit {
    image: string = GetImages('lawyer.png');
    clientAddEditForm: FormGroup;
    clientModel: IClientModel;
    constructor() {
    }

    ngOnInit(): void {
        this.createForm();
    }

    private createForm(): FormGroup {
        this.clientModel = {} as IClientModel;
        this.clientModel.location = {} as ILocation;
        return this.clientAddEditForm = new FormGroup({
            firstName: new FormControl(this.clientModel.firstName, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            middleName: new FormControl(this.clientModel.middleName, [Validators.pattern(RegexPatternEnum.numberPattern)]),
            lastName: new FormControl(this.clientModel.lastName, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            location: new FormControl({
                address1: new FormControl(this.clientModel.location.address1, [Validators.required]),
                address2: new FormControl(this.clientModel.location.address2, [Validators.required]),
                state: new FormControl(this.clientModel.location.state, [Validators.required]),
                district: new FormControl(this.clientModel.location.district, [Validators.required]),
                city: new FormControl(this.clientModel.location.city, [Validators.required]),
                pincode: new FormControl(this.clientModel.location.pincode, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            }),
            email: new FormControl(this.clientModel.email, [Validators.email]),
            phone: new FormControl(this.clientModel.phone, [Validators.pattern(RegexPatternEnum.numberPattern)]),
            porpose: new FormControl(this.clientModel.purpose, [Validators.required]),
            occupation: new FormControl(this.clientModel.occupation, [Validators.required]),
            about: new FormControl(this.clientModel.about, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            isPrivate: new FormControl(this.clientModel.isPrivate = false, [Validators.required]),
        });
    }
}
