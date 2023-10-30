import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BerryResponse } from '../model/berry-list.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {

  constructor(private http: HttpClient) { }

  getBerryList(): Observable<BerryResponse>{
    return this.http.get<BerryResponse>('https://pokeapi.co/api/v2/berry')
  }
}
