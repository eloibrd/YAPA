export const selectPokemons = state => state.pokemonState.pokemons

export const selectSearchQuery = state => state.pokemonState.searchQuery

export const selectSelectedPokemonId = state => state.pokemonState.selectedPokemonId

export const selectPokemonsFromQuery = state => {
    const query = selectSearchQuery(state);
    const pokemons = selectPokemons(state);

    if (query === "") {
        return pokemons;
    }

    return pokemons.filter(robot => robot.name.includes(query));
}
