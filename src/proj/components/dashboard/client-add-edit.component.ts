import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import httpStatus = require('http-status-codes');
import { IClientModel, IDropDownModel, IResponseBody } from '../../models/data-models';
import { CommonServices, DashboardHttpService, MessageService } from '../../services/httpServices/http-services';
import { AlertTypeEnum, RegexPatternEnum } from '../../services/Utility/enumUtil';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'client-add-edit',
    templateUrl: GetTemplate('dashboard', 'client-add-edit.html'),
})
export class ClientAddEditComponent implements OnInit {
    @Input('addClient') addClient: boolean;
    @Input('client') client: IClientModel;

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
        this.btn_label = (this.addClient) ? 'Submit' : 'Update';
        if (typeof this.client !== 'undefined') {
            this.clientModel = this.client;
            this.selectedState = { id: this.clientModel.state, name: this.clientModel.state };
            this.selectedCity = { id: this.clientModel.city, name: this.clientModel.city };
            this.getCities(this.selectedState.id);
        }
        this.commonService.getStates().subscribe((result) => {
            let response = result.body as IResponseBody<Array<IDropDownModel>>;
            response.result.forEach((state) => {
                this.stateList.push({ id: state.name, name: state.name });
            });
        });
        this.createForm();
    }
    feild_Validation(): void { }
    add_update_client(model: FormGroup): void {
        if (model.valid) {
            this.clientModel = model.value as IClientModel;
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
                let response = result.body as IResponseBody<IDropDownModel[]>;
                response.result.forEach((city) => {
                    this.cityList.push({ id: city.name, name: city.name });
                });
            });
        } else {
            this.cityList = [];
        }
    }
    private createForm(): FormGroup {
        return this.clientAddEditForm = this.formBuilder.group({
            about: new FormControl(this.clientModel.about, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            address1: new FormControl(this.clientModel.address1, [Validators.required]),
            address2: new FormControl(this.clientModel.address2, []),
            city: new FormControl(this.clientModel.city, [Validators.required]),
            district: new FormControl(this.clientModel.district, [Validators.required]),
            email: new FormControl(this.clientModel.email, [Validators.required, Validators.pattern(RegexPatternEnum.emailPattern)]),
            firstName: new FormControl(this.clientModel.firstName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            isprivate: new FormControl(this.clientModel.isprivate, [Validators.required]),
            lastName: new FormControl(this.clientModel.lastName, [Validators.required, Validators.pattern(RegexPatternEnum.stringPattern)]),
            middleName: new FormControl(this.clientModel.middleName, [Validators.pattern(RegexPatternEnum.stringPattern)]),
            occupation: new FormControl(this.clientModel.occupation, []),
            phone: new FormControl(this.clientModel.phone, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            pincode: new FormControl(this.clientModel.pincode, [Validators.required, Validators.pattern(RegexPatternEnum.numberPattern)]),
            porpose: new FormControl(this.clientModel.purpose, []),
            state: new FormControl(this.clientModel.state, [Validators.required]),
        });
    }
}
