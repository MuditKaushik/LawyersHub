import { NgModule } from '@angular/core';
import { ErrorMessageDirective } from './shared/errorMessagesDirective';

@NgModule({
    declarations: [
        ErrorMessageDirective,
    ],
    exports: [
        ErrorMessageDirective,
    ],
})

export class CustomDirectiveModule { }
