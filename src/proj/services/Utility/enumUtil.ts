export enum RegexPatternEnum {
    numberPattern = '^[0-9]*$',
    stringPattern = '^[a-zA-Z]*$',
    emailPattern = '(^[a-zA-Z_\.\d]*)@{1}([a-zA-Z\d]*)+([\.a-zA-Z]{2,3}[^\.])*$',
}
export enum ErrorMessagesEnum {
    required = 'field is required.',
    pattern = 'field pattern is not correct.',
    email = 'Invalid email address.',
    USEREXISTS = 'User detail already exists.',
}
export enum ErrorTypesEnum {
    required = 'required',
    pattern = 'pattern',
    email = 'email',
}
export enum AlertTypeEnum {
    primaryType = 'alert alert-primary',
    secondaryType = 'alert alert-secondary',
    successType = 'alert alert-success',
    dangerType = 'alert alert-danger',
    warningType = 'alert alert-warning',
    infoType = 'alert alert-info',
    lightType = 'alert alert-light',
    darkType = 'alert alert-dark'
}
export enum SuccessMessageEnum {
    createUserSuccess = 'User created successfully.',
    loading = 'loading...',
}
