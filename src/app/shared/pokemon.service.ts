import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/'
  pokemons: any [] = [];
  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string): Promise<any> {
    return firstValueFrom(this.http.get(this.url + pokemonName));
  }
}
