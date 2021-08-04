
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  apiKey = 'b0147f6411b11c4795a9f9e4bebc27a3';
  URI: string;

  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI}${cityName}`);
  }
}