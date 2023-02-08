import styles from "PokemonDetail.module.scss";
import logo from "../../assets/images/logo.svg";

/**
 * Display a progress indicator
 * @returns A React component
 */
export default function ProgressLoader() {
  return (
    <div className={styles.Loader}>
      <img src={logo} className={styles.Logo} alt="logo" />
    </div>
  );
}
