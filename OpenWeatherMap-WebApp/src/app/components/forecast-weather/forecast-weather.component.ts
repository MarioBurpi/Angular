import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {

  @Input()
  cityForecast: any;
  @Input()
  cityWeather:any;

  constructor() { }

  ngOnInit(): void {
  }

}
