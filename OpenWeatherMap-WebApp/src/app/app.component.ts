import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cityWeather:any;

  constructor(private currentWeatherService:CurrentWeatherService){
  }

  ngOnInit() {
    
  }

  getWeather(cityName:string){
    this.currentWeatherService.getWeather(cityName).subscribe(
      res=> this.cityWeather = res, 
      err=>console.log(err)
      );

  }

  submitLocation(cityName:HTMLInputElement){
    this.getWeather(cityName.value);
    cityName.value = '';
    cityName.focus;
    return false;
  }

  
}
