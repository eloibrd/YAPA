/**
 * Adapter to transform PokeApi pokedex results to `PokemonEntry`
 *
 * Use `getWrappedPokemonEntry` to obtain a wrapped `PokemonEntry`
 */
export default class PokemonEntryAdapter implements IPokemonEntryAdapter {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  getWrappedPokemonEntry() {
    return {
      entryNumber: this.data["entry_number"],
      name: this.data["pokemon_species"]["name"],
    };
  }
}
