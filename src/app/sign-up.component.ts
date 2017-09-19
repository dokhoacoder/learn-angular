import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <div formGroupName="subject">
                <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label>
                <label><input type="checkbox" name="Angular" formControlName="angular"> Angular</label>
                <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> ReactJS</label>
            </div>
            <br><br>
            <button>Submit</button>
        </form>
    `
})

export class SignUpComponent implements OnInit {
    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formSignUp = this.fb.group({
            email: 'pho1@gmail.com',
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            })
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }
}
