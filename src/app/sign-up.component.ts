import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <button>Submit</button>
        </form>
    `
})

export class SignUpComponent {
    formSignUp: FormGroup;

    constructor() {
        this.formSignUp = new FormGroup({
            email: new FormControl(),
            password: new FormControl
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }
}
