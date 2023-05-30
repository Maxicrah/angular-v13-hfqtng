import { Component } from '@angular/core';
import { IpInfoService } from '../ip-info.service';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css'],
})
export class IpInfoComponent {
  ipAddress: string;
  ipInfo: any;

  constructor(private ipInfoService: IpInfoService) {}

  searchIp() {
    this.ipInfoService.getIpInfo(this.ipAddress).subscribe((response: any) => {
      this.ipInfo = response;
    });
  }
}
