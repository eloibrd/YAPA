interface PokemonListState {
  /**
   * List of pokemons to display
   */
  pokemonList: Array<Pokemon>;
  /**
   * State status
   */
  status: "idle" | "loading" | "failed";
}
