import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})

export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015, 7, 25);
  person = { name: 'Khoa Pham', age: 30 };
  address = Promise.resolve('92 Le Thi Rieng');
  constructor() { }

  ngOnInit() {
  }

}
