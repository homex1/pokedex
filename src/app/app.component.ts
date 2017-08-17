import { Component, OnInit, HostListener } from '@angular/core';
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
  index: number = 0;
  original: Pokemon;
  itemsPerRow: number = 12;

  constructor(private pokemonService: PokemonService) { }

  @HostListener('document:keydown', ['$event'])
  public onWindowKeyPress(event: KeyboardEvent): void {
    var keys = {'ArrowLeft': 'l', 'ArrowUp': 'u', 'ArrowRight': 'r', 'ArrowDown': 'd'};
    var dir = keys[event.key];
    if(dir) {
      this.direction(dir);
    }
  }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonService.getPokemones().then(pokemones => this.pokemones = pokemones);
  }

  save(): void {
    this.pokemonService.update(this.pokemon)
      .then((pokemon) => {
        alert("Pokemon actualizado");
        this.pokemon = pokemon;
        this.pokemon = null;
      });
  }

  cancel(): void {
    if(this.pokemon && this.original){
      this.pokemon.mote = this.original.mote;
      this.pokemon.kind1 = this.original.kind1;
      this.pokemon.kind2 = this.original.kind2;
      this.pokemon = null;
      this.original = null;
    }
  }

  onSelect(pokemon: Pokemon, index: number): void {
    this.cancel()
    this.original = Object.assign({}, pokemon);
    this.pokemon  = pokemon;
    this.index    = index;
  }

  direction(dir: String): void {
    switch(dir) {
      case 'l' : this.index--; break;
      case 'r' : this.index++; break;
      case 'u' : this.index = this.index - this.itemsPerRow; break;
      case 'd' : this.index = this.index + this.itemsPerRow; break;
    }

    if(this.index >= this.pokemones.length)
      this.index = 0;
    if(this.index < 0)
      this.index = this.pokemones.length - 1;
    this.pokemon = this.pokemones[this.index];
  }
}
