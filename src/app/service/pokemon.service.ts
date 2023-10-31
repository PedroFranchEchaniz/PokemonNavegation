import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../model/pokemon-list.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=400')
  }

}
