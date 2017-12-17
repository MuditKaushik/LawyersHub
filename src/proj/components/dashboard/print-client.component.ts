import { Component, OnInit } from '@angular/core';
import { DashboardHttpService } from '../../services/httpServices/dashboardServices/http-dashboard-service';
import { GetImages, GetTemplate } from '../../services/Utility/pathUtil';

@Component({
    templateUrl: GetTemplate('dashboard', 'print-client.html'),
})
export class PrintClientComponent implements OnInit {
    privateClients: any[];
    publicClients: any[];
    showloader: boolean;
    constructor(private dashboardService: DashboardHttpService) { }

    ngOnInit(): void {
        this.showloader = true;
        this.dashboardService.getClientList().subscribe((data: any) => {
            this.showloader = false;
            this.privateClients = data.value;
            this.publicClients = data.value;
        });
    }
}
