import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <button>Add for child</button>
        <app-child></app-child>
    `
})

export class ParentComponent {}
