export enum AccountEndpoints {
    token = 'http://localhost:1802/api/v1/account/login',
    addUser = 'http://localhost:1802/api/v1/account/signup',
}
export enum CommonEndpoints {
    getCountries = 'http://localhost:1802/api/common/getcountry',
    getStates = 'http://localhost:1802/api/common/getstates',
    getCities = 'http://localhost:1802/api/common/getcities',
}
export enum DashboardEndpoints {
    getClient = 'http://localhost:1802/api/v1/authuser/getclients',
    addClient = 'http://localhost:1802/api/v1/authuser/addclient',
    removeClient = 'http://localhost:1802/api/v1/authuser/removeclient',
}
