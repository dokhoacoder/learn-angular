import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class IpService {
    constructor(private http: Http) {}

    getIp() {
        return this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.ip);
    }
}
