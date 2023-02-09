import React from "react";
import styles from "./App.module.scss";
import AppBar from "./components/AppBar/AppBar";
import Pokedex from "./components/Pokedex/Pokedex";

/**
 * Base Application Layout with a header and a main content section
 */
class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <div>
          <AppBar />
        </div>
        <div className={styles.MainContent}>
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
