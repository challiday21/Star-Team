import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  urlApi: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://swapi.dev/api/';
  }

  getAllFilms(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/films`);
  }

}
