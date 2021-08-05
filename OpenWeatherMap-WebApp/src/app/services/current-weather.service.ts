/*
http://api.openweathermap.org/data/2.5/weather?appid=b0147f6411b11c4795a9f9e4bebc27a3&units=metric&q=copacabana 

http://api.openweathermap.org/data/2.5/forecast?appid=b0147f6411b11c4795a9f9e4bebc27a3&units=metric&q=warsaw
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  apiKey = 'b0147f6411b11c4795a9f9e4bebc27a3';
  readonly URI_CURRENT: string;
  readonly URI_FORECAST: string;

  constructor(private http: HttpClient) {
    this.URI_CURRENT = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    this.URI_FORECAST = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI_CURRENT}${cityName}`);
  }

  getForecast(cityName: string){
    return this.http.get(`${this.URI_FORECAST}${cityName}`)
  }
}