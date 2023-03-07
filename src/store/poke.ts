const API = 'https://pokeapi.co/api/v2/pokemon-species?limit=23';

import { atom } from 'nanostores';

export interface PokemonType {
  name: string;
  url: string;
}

export const poke = atom<PokemonType[]>([]);

export function fetchList() {
  fetch(API)
    .then((resp) => resp.json())
    .then((resp) => {
      poke.set(resp.results);
    });
}
