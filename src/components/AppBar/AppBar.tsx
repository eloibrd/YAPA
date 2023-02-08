import styles from "./AppBar.module.scss";
import pokeball from "../../assets/pokeball.png";

/**
 * Display the application App Bar
 * @returns A React component
 */
export default function AppBar() {
  return (
    <div className={styles.AppBar}>
      <img
        className={styles.AppBarLogo}
        src={pokeball}
        alt="Pokeball"
        width="50"
      />
      <div className={styles.AppBarTitle}>Pokedex</div>
    </div>
  );
}
