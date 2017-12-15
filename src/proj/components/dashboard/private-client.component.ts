import { Component, OnInit } from '@angular/core';
import { DashboardHttpService } from '../../services/httpServices/dashboardServices/http-dashboard-service';
import { GetImages, GetStyle, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'private-client.html'),
    styleUrls: [
        GetStyle('dashboard', 'public-private-client.css'),
    ],
})
export class PrivateClientComponent implements OnInit {
    personList: any;
    image: string = GetImages('lawyer.png');

    constructor(private dashboardHttp: DashboardHttpService) {
    }

    ngOnInit(): void {
        this.dashboardHttp.getClientList().subscribe((data: any) => {
            this.personList = data.value;
        });
    }
}
