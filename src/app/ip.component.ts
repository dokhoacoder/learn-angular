import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ip',
  template: '<h3>{{ ip }}</h3>'
})

export class IpComponent {
    ip: String;
    constructor(private http: Http) {
        this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res => res.json())
        .then(resJson => this.ip = resJson.ip)
        .catch(err => console.log(err));
    }
}
