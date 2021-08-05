import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cityWeather:any;
  cityForecast: any;
  unknownCity:boolean = false;

  constructor(private currentWeatherService:CurrentWeatherService){
  }

  ngOnInit() {
    
  }

  getWeather(cityName:string){
    this.currentWeatherService.getWeather(cityName).subscribe(
      res=> this.cityWeather = res, 
      err=>this.unknownCity = true
      );

  }

  getForecast(cityName: string){
    this.currentWeatherService.getForecast(cityName).subscribe(
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
