import { Component, OnInit } from '@angular/core';
import { DashboardHttpService } from '../../services/httpServices/dashboardServices/http-dashboard-service';
import { GetImages, GetStyle, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'private-client.html'),
    styleUrls: [
        GetStyle('dashboard', 'private-public-client.css'),
    ],
})
export class PrivateClientComponent implements OnInit {
    personList: any;
    image: string = GetImages('lawyer.png');
    showloader: boolean;
    clientCount: number;
    constructor(private dashboardHttp: DashboardHttpService) {
    }

    ngOnInit(): void {
        this.showloader = true;
        this.dashboardHttp.getClientList().subscribe((data: any) => {
            this.showloader = false;
            this.clientCount = data.value.length;
            this.personList = data.value;
        });
    }
}
