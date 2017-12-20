import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorMessagesEnum, ErrorTypesEnum } from '../../services/Utility/enumUtil';

@Directive({
    selector: '[errorMessage]',
})
export class ErrorMessageDirective {
    private element: HTMLElement;
    private errorMsgDiv: Element | null;
    constructor(private elementRef: ElementRef, private control: NgControl) {
        this.element = this.elementRef.nativeElement;
        this.errorMsgDiv = this.element.nextElementSibling;
    }
    @HostListener('input', ['$event.target']) getErrors(inputElement: HTMLElement): void {
        if (this.control.errors) {
            this.addErrorClassOnElement(true);
            for (let error of Object.keys(this.control.errors)) {
                this.displayMessage(error);
            }
        } else {
            this.addErrorClassOnElement(false);
            $(this.element).next().html('');
        }
    }
    displayMessage(errortype: string): void {
        switch (errortype) {
            case ErrorTypesEnum.required:
                $(this.element).next().html(ErrorMessagesEnum.required);
                break;
            case ErrorTypesEnum.pattern:
                $(this.element).next().html(ErrorMessagesEnum.pattern);
                break;
            default: break;
        }
    }
    addErrorClassOnElement(addClass: boolean): void {
        switch (addClass) {
            case true: this.element.classList.add('is-invalid'); break;
            case false: this.element.classList.remove('is-invalid'); break;
        }
    }
    hasError(): boolean {
        return (this.control.errors) ? true : false;
    }
}
