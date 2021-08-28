import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchWeatherService } from '../services/fetch-weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  onSubmitCity = new EventEmitter<string>();
  cityName:string="";

  constructor(private fetchWeatherService:FetchWeatherService) { }

  ngOnInit(): void {
  }

  submitLocation(){
    this.onSubmitCity.emit(this.cityName);

  }

}
