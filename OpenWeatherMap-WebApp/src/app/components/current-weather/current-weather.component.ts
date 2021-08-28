import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input()
  cityWeather: any;

  constructor(){
  }

  ngOnInit(): void {
  }




}
