import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input placeholder="Email" ngModel name="email">
            <br><br>
            <input type="password" placeholder="Password" ngModel name="password">
            <br><br>
            <button>Submit</button>
        </form>
    `
})

export class SignInComponent {
    onSubmit(formSignIn) {
        console.log(formSignIn);
    }
}
