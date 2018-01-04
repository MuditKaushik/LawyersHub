export enum RegexPatternEnum {
    numberPattern = '^[0-9]*$',
    stringPattern = '^[a-zA-Z]*$',
    emailPattern = '(^[a-zA-Z_\.\d]*)@{1}([a-zA-Z\d]*)+([\.a-zA-Z]{2,3}[^\.])*$',
}
export enum ErrorMessagesEnum {
    required = 'field is required.',
    pattern = 'field pattern is not correct.',
    email = 'Invalid email address.',
}
export enum ErrorTypesEnum {
    required = 'required',
    pattern = 'pattern',
    email = 'email',
}
