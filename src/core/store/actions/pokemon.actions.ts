/**
 * Update pokemon list
 */
export const UPDATE_POKEMONS = "UPDATE_POKEMONS";

export function setPokemons(pokemons: Array<Pokemon>) {
  return { type: UPDATE_POKEMONS, pokemons };
}

/**
 * Update selected pokemon id
 */
export const UPDATE_SELECTED_POKEMON = "UPDATE_SELECTED_POKEMON";

export function setSelectedPokemon(pokemonId: Number) {
  return { type: UPDATE_SELECTED_POKEMON, pokemonId };
}
