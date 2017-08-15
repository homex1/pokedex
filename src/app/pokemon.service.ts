import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pokemon } from './pokemon';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonService {
  private headers   = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'https://api-pokedex.herokuapp.com/pokemons';

  constructor(private http: Http) { }

  getPokemones(): Promise<Pokemon[]> {
    return this.http.get(this.baseUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().pokemons as Pokemon[])
               .catch(this.handleError);
  };

  update(pokemon: Pokemon): Promise<Pokemon> {
    const url = `${this.baseUrl}/${pokemon.pokedex}`;
    //console.log(pokemon.pokedex);
    return this.http
      .put(url, JSON.stringify(pokemon), {headers: this.headers})
      .toPromise()
      .then(pokemon => pokemon.json().pokemon as Pokemon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    var errors = JSON.stringify(error._body);
    console.log(errors['kind1']);

    if(error._body !== undefined)
    {
      alert('An error occurred: ' + error._body);
    }
    //alert('An error occurred: ' + error);
    console.error('An error occurred', error._body);
    return Promise.reject(error.message || error);
  }
}
