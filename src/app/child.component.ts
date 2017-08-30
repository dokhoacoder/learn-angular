import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent();">Add</button>`
})

export class ChildComponent {
    @Output() myClick = new EventEmitter();

    addForParent() {
        this.myClick.emit();
    }
}
