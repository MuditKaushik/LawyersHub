import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    selector: 'loader',
    templateUrl: GetTemplate('shared', 'loader.html'),
})
export class LoaderComponent {
    constructor(private loaderConfig: NgbProgressbarConfig) {
        loaderConfig.animated = true;
        loaderConfig.type = 'info';
        loaderConfig.height = '10px';
        loaderConfig.striped = true;
        loaderConfig.max = 100;
    }
}
