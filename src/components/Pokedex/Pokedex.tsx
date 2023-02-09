import { useEffect, useState } from "react";
import styles from "./Pokedex.module.scss";
import PokemonList from "../Pokemon/PokemonList/PokemonList";
import { useAppDispatch, useAppSelector } from "../../lib/store/hooks";
import PokedexApiService from "../../lib/services/pokedexApiService";
import PokemonDetail from "../Pokemon/PokemonDetail/PokemonDetail";

/**
 * Display the Pokedex view
 * @returns A React component
 */
export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<Array<PokemonEntry>>([
    { entryNumber: 1, name: "Bulbazaur" } as PokemonEntry,
    { entryNumber: 2, name: "Bulbazaur" } as PokemonEntry,
    { entryNumber: 3, name: "Bulbazaur" } as PokemonEntry,
  ] as Array<PokemonEntry>);

  const select = useAppSelector;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPokedex = async () => {
      //   if (select(selectPokemonListStatus) !== ERessourceStatus.loading) {
      // dispatch(updateStatus(ERessourceStatus.loading));
      const pokemons: PokemonEntry[] =
        await PokedexApiService.getNationalPokedex();
      setPokemonList(pokemons);
      //   console.log(pokemonList);
      // dispatch(updatePokemonList(pokemonList));
      // dispatch(updateStatus(ERessourceStatus.idle));
    };
    fetchPokedex();
  }, []);

  return (
    <>
      <div className={styles.Pokedex}>
        <PokemonList pokemonEntries={pokemonList} />
        <PokemonDetail pokemonId={1} />
      </div>
    </>
  );
}
