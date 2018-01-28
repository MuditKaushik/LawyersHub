import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorMessagesEnum, ErrorTypesEnum } from '../../services/Utility/enumUtil';

@Directive({
    selector: '[validator]',
})
export class ValidationDirective {
    @Input('validator') errorMessage: string;
    private element: HTMLInputElement;
    private errorMsgDiv: Element | null;
    constructor(private elementRef: ElementRef, private control: NgControl) {
        this.element = this.elementRef.nativeElement;
    }
    @HostListener('input', ['$event.target']) getErrors(inputElement: HTMLInputElement): void {
        if (this.control.errors) {
            this.addErrorClassOnElement(true);
            for (let error of Object.keys(this.control.errors)) {
                this.displayMessage(error);
            }
        } else {
            this.addErrorClassOnElement(false);
            this.removeErrorMessage();
        }
    }
    displayMessage(errortype: string): void {
        switch (errortype) {
            case ErrorTypesEnum.required:
                this.createErrorMessage(ErrorMessagesEnum.required);
                break;
            case ErrorTypesEnum.pattern:
                this.createErrorMessage(ErrorMessagesEnum.pattern);
                break;
            case ErrorTypesEnum.email:
                this.createErrorMessage(ErrorMessagesEnum.email);
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
    createErrorMessage(message: string): void {
        let parentElement = this.element.parentElement as HTMLDivElement;
        let divNode = document.createElement('div');
        divNode.classList.add('invalid-feedback');
        divNode.innerHTML = (this.element instanceof HTMLInputElement) ?
            `${this.element.placeholder} ${message}` : message;
        parentElement.appendChild(divNode);
    }
    removeErrorMessage(): void {
        let parentElement = this.element.parentElement as HTMLDivElement;
        Object.values(parentElement.children).forEach((child: Element) => {
            (child instanceof HTMLDivElement) ? parentElement.removeChild(child) : '';
        });
    }
}
