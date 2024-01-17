import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  private baseUrl = 'https://rickandmortyapi.com/api/'
  constructor(private http: HttpClient) { }

  getcharacter () {
    return this.http.get(this.baseUrl+'/character')
  }
}
