export enum AccountEndpoints {
    token = 'http://localhost:1802/api/individual/login',
    addUser = 'http://localhost:1802/api/individual/signup',
}
export enum CommonEndpoints {
    getCountries = 'http://localhost:1802/api/common/country',
    getStates = 'http://localhost:1802/api/common/states',
    getCities = 'http://localhost:1802/api/common/city',
}
export enum DashboardEndpoints {
    getClient = 'http://localhost:1802/api/client/clients',
    addClient = 'http://localhost:1802/api/client/add',
    removeClient = 'http://localhost:1802/api/client/remove',
}
