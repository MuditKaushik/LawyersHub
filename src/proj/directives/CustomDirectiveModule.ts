import { NgModule } from '@angular/core';
import { ValidationDirective } from './shared/ValidationDirective';

@NgModule({
    declarations: [
        ValidationDirective,
    ],
    exports: [
        ValidationDirective,
    ],
})

export class CustomDirectiveModule { }
