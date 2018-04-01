import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IClientModel, IDropDownModel, IResponseBody } from '../../models/data-models';
import { RegexPatternEnum, AlertTypeEnum } from '../../services/Utility/enumUtil';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';
import { DashboardHttpService, CommonServices, MessageService } from '../../services/httpServices/http-services';
import httpStatus = require('http-status-codes');

@Component({
    selector: 'client-add-edit',
    templateUrl: GetTemplate('dashboard', 'client-add-edit.html'),
})
export class ClientAddEditComponent implements OnInit {
    @Input('addClient') addClient: boolean;
    @Input('client') client: IClientModel

    image: string = GetImages('lawyer.png');
    clientAddEditForm: FormGroup;
    clientModel: IClientModel = {} as IClientModel;
    btn_label: string;
    stateList: Array<IDropDownModel> = new Array<IDropDownModel>();
    cityList: Array<IDropDownModel>;
    selectedState: IDropDownModel = {} as IDropDownModel;
    selectedCity: IDropDownModel = {} as IDropDownModel;

    constructor(private formBuilder: FormBuilder,
        private dashboarHttp: DashboardHttpService,
        private commonService: CommonServices,
        private messageService: MessageService) {
    }

    ngOnInit(): void {
        if (typeof this.client !== 'undefined') {
            this.clientModel = this.client;
            this.selectedState = { id: this.clientModel.state, name: this.clientModel.state };
            this.selectedCity = { id: this.clientModel.city, name: this.clientModel.city };
            this.getCities(this.selectedState.id);
        }
        this.btn_label = (this.addClient) ? 'Submit' : 'Update';
        this.commonService.getStates().subscribe((result) => {
            if (result.status === httpStatus.OK && result.body !== null) {
                result.body.forEach((state: string) => {
                    this.stateList.push({ id: state, name: state });
                });
            }
        });
        this.createForm();
    }
    feild_Validation(): void { }
    add_update_client(model: FormGroup): void {
        if (model.valid) {
            this.clientModel = <IClientModel>model.value;
            this.dashboarHttp.addClient(this.clientModel)
                .subscribe((result) => {
                    let response = result.body as IResponseBody<boolean>;
                    if (response.success) {
                        this.messageService.addMessage(AlertTypeEnum.successType,
                            `${this.clientModel.firstName} ${this.clientModel.middleName} ${this.clientModel.lastName} added successfully.`,
                            null, true);
                    } else {
                        this.messageService.addMessage(AlertTypeEnum.successType, 'Client unable added.', null, true);
                    }
                });
        }
    }
    getCities(state: string): void {
        if (state) {
            this.cityList = new Array<IDropDownModel>();
            this.commonService.getCities(state).subscribe((result) => {
                if (result.status === httpStatus.OK && result.body !== null) {
                    result.body.forEach((city: string) => {
                        this.cityList.push({ id: city, name: city });
                    });
                }
            });
        } else {
            this.cityList = [];
        }
    }
    private createForm(): FormGroup {
        return this.clientAddEditForm = this.formBuilder.group({
            firstName: new FormControl(this.clientModel.firstName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            middleName: new FormControl(this.clientModel.middleName, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            lastName: new FormControl(this.clientModel.lastName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            address1: new FormControl(this.clientModel.address1, [Validators.required]),
            address2: new FormControl(this.clientModel.address2, []),
            state: new FormControl(this.clientModel.state, [Validators.required]),
            district: new FormControl(this.clientModel.district, [Validators.required]),
            city: new FormControl(this.clientModel.city, [Validators.required]),
            pincode: new FormControl(this.clientModel.pincode, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            email: new FormControl(this.clientModel.email, [Validators.required, Validators.pattern(RegexPatternEnum.emailPattern)]),
            phone: new FormControl(this.clientModel.phone, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            porpose: new FormControl(this.clientModel.purpose, []),
            occupation: new FormControl(this.clientModel.occupation, []),
            about: new FormControl(this.clientModel.about, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            isprivate: new FormControl(this.clientModel.isprivate, [Validators.required]),
        });
    }
}
