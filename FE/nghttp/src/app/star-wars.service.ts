import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }
  getPerson(){
    return this.http.get('https://swapi.co/api/people/1');
  }
}
