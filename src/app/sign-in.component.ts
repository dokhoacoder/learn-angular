import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input placeholder="Email" [(ngModel)]="email" name="email">
            <br><br>
            <input type="password" placeholder="Password" [(ngModel)]="password" name="password">
            <br><br>
            <button>Submit</button>
        </form>
    `
})

export class SignInComponent {
    email = '';
    password = '';
    onSubmit(formSignIn) {
        console.log(formSignIn.value);
    }
}
