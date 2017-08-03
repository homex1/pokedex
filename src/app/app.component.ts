import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'pokemones',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})

export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemones: Pokemon[];
  pokemon: Pokemon;

  constructor(private heroService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(): void {
    this.heroService.getPokemones().then(pokemones => this.pokemones = pokemones);
  }

  onSelect(pokemon: Pokemon): void {
    this.pokemon = pokemon;
  }
}
