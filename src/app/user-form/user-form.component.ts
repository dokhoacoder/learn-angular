import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  evenStyle = { color: 'red', fontSize: '40px' };
  oddStyle = { color: 'black', fontSize: '20px' };
  isHighlight = true;
  currentClass = { circle: !this.isHighlight, square: this.isHighlight };
  constructor() { }

  ngOnInit() {
  }
}
