import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceTracker {
    private _spinnerValue: boolean = false;
    constructor() { }
    getshowSpinner() {
        return this._spinnerValue;
    }
    setSpinnerStatus(currentValue: boolean) {
        this._spinnerValue = currentValue;
    }
}
