import { useState } from "react";
import styles from "./Pokedex.module.scss";
import PokemonList from "../Pokemon/PokemonList/PokemonList";

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

  return (
    <>
      <div className={styles.Pokedex}>
        <div className={styles.PokemonList}>
          <PokemonList pokemonEntries={pokemonList} />
        </div>
        <div className={styles.PokemonDetail}></div>
      </div>
    </>
  );
}
