export interface PokemonListResponse {
  count:    number;
  next?:     string;
  previous?: string;
  results:  SinglePokemon[];
}

export interface SinglePokemon {
  name: string;
  id: number;
  img: string;
  types: Type[];
}

export interface Species {
  name: string;
  url:  string;
}

export interface Type {
  slot: number;
  type: Species;
}