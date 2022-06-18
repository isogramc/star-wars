import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import IFilms from "./types/typings";
import IFilm from "./types/typings";
import ICharacter from "./types/typings";
import IPlanet from "./types/typings";

export default interface IPlanets{
  count: number,
  next: string,
  previous: null,
  results: IPlanet[]
}

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  constructor(
    private http: HttpClient
  ) {}

  getFilms():Observable<IFilms> {
    return this.http.get<IFilms>('https://swapi.dev/api/films');
  }

  getFilm(id: string):Observable<IFilm> {
    return this.http.get<IFilm>(`https://swapi.dev/api/films/${id}`);
  }

  getCharacter(id: string): Observable<ICharacter> {
    return this.http.get<ICharacter>(`https://swapi.dev/api/people/${id}`);
  }

  getPlanets(url: string): Observable<IPlanets> {
    console.log('inService', url);
    return this.http.get<IPlanets>(`${url}`);
  }

  getPlanet(url: string):  Observable<IPlanet> {
    return this.http.get<IPlanet>(`${url}`);
  }

  getPlanetDetail(id: string):  Observable<IPlanet> {
    return this.http.get<IPlanet>(`https://swapi.dev/api/planets/${id}`);
  }
}
