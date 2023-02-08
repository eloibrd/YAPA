import styles from "./PokemonCard.module.scss";

/**
 * @prop `pokemonEntry`: number - the pokemon entry to diplay in a card
 */
type Props = { pokemonEntry: PokemonEntry };

/**
 * Display a detailed pokemon
 * @returns A React component
 */
export default function PokemonCard({ pokemonEntry }: Props) {
  return (
    <div className={styles.Card}>
      #{pokemonEntry.entryNumber.toString()} {pokemonEntry.name}
    </div>
  );
}
