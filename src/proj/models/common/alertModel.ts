export interface IAlertModel {
    alertId: number;
    type: string;
    message: string;
    iconClass: string | null;
    dismissable: boolean;
}