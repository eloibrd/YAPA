import styles from "./PokemonList.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";

/**
 * @prop `pokemons`: Array<PokemonEntry> - the list of PokemonEntries to display
 */
type Props = { pokemonEntries: Array<PokemonEntry> };

/**
 * Display a list of Pokemons
 * @returns A React component
 */
export default function PokemonList({ pokemonEntries }: Props) {
  return (
    <div className={styles.App}>
      {pokemonEntries.map((pokemonEntry, index) => (
        <div key={pokemonEntry.entryNumber}>
          <PokemonCard pokemonEntry={pokemonEntry} />
        </div>
      ))}
    </div>
  );
}
