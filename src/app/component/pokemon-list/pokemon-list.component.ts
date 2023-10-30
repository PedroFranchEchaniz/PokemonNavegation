import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon-list.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(resp =>{
      this.pokemonList = resp.results;
    })
  }

  
}
