export interface IClientModel {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    location: ILocation;
    email: string;
    phone: string;
    purpose: string;
    occupation: string;
    about: string;
    isPrivate: boolean;
}
export interface ILocation {
    address1: string;
    address2: string;
    state: string;
    district: string;
    city: string;
    pincode: string;
}
