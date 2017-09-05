import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  template: '<h3>{{ ip }}</h3>'
})

export class IpComponent implements OnInit {
    ip: String;
    constructor(private ipService: IpService) {}
    ngOnInit(): void {
        this.ipService.getIp()
        .then(ip => this.ip = ip)
        .catch(err => console.log(err));
    }
}
