import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from './services/fetch-weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cityWeather:any;
  cityForecast: any;
  unknownCity:boolean = false;

  constructor(private fetchWeatherService:FetchWeatherService){
  }

  ngOnInit() {

  }

  getWeather(cityName:string){
    this.fetchWeatherService.getWeather(cityName).subscribe(
      res=> this.cityWeather = res,
      err=>this.unknownCity = true
      );

  }

  getForecast(cityName: string){
    this.fetchWeatherService.getForecast(cityName).subscribe(
      res=> this.cityForecast = res,
      err=> this.unknownCity = true
    );
  }

  submitLocation(cityName:HTMLInputElement){
    this.getWeather(cityName.value);
    this.getForecast(cityName.value)
    cityName.value = '';
    cityName.focus;
    return false;
  }


}
