import styles from "./PokemonDetail.module.scss";

/**
 * @prop `pokemonId`: number - the id of the pokemon to display
 */
type Props = { pokemonId: number };

/**
 * Display a detailed pokemon
 * @returns A React component
 */
export default function PokemonDetail({ pokemonId }: Props) {
  return <div className={styles.PokemonDetail}></div>;
}
