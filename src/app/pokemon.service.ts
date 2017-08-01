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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
