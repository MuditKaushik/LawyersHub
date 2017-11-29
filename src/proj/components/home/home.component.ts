import {Component, OnInit} from '@angular/core';
import {GetTemplate, GetImages} from '../../services/Utility/pathUtil';

@Component({
    selector: "lawyer-hub",
    templateUrl: GetTemplate("home", "home.html")
})
export class HomeComponent implements OnInit {
    logo: string;

    constructor() {
    }

    ngOnInit(): void {
        this.logo = GetImages('lawyer.png');
    }
}