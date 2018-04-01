export interface IClientModel {
    clientid: string;
    userid: string;
    firstName: string;
    middleName: string;
    lastName: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    district: string;
    city: string;
    pincode: string;
    email: string;
    phone: string;
    purpose: string;
    occupation: string;
    about: string;
    isprivate: boolean;
}

export class IClientVitalInfo {
    clientInfo: IClientModel;
    constructor(client: IClientModel) {
        this.clientInfo = client;
    }
    get fullName(): string {
        return `${this.clientInfo.firstName} ${this.clientInfo.middleName} ${this.clientInfo.lastName}`;
    }
}

