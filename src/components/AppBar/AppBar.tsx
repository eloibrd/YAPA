import React from "react";
import styles from "./AppBar.module.scss";
import pokeball from "../../assets/images/pokeball.png";

class AppBar extends React.Component {
  render() {
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
}

export default AppBar;
