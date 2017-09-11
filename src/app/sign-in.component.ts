import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <input placeholder="Email" [(ngModel)]="email">
        <br><br>
        <input type="password" placeholder="Password" [(ngModel)]="password">
        <br><br>
        <button (click)="onSubmit();">Submit</button>
    `
})

export class SignInComponent {
    email = '';
    password = '';
    onSubmit() {
        console.log(this.email, this.password);
    }
}
