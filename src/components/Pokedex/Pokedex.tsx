import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Pokedex.module.scss";

class Pokedex extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <img src={logo} className={styles.Logo} alt="logo" />
      </div>
    );
  }
}

export default Pokedex;
