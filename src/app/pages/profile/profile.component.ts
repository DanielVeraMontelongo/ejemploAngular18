import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
   const pikachu = await this.pokemonService.getPokemon('pikachu');
   console.log(pikachu);
  }
}
