import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTemp('Tokyo')
    .then(temp => console.log(temp))
    .catch(err => console.log(err));
  }
}
