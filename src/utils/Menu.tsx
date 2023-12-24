import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header className={styles.menu}>
      <NavLink className={styles.link} to="/">
        <h1>Movies</h1>
      </NavLink>
      <nav>
        <NavLink className={styles.link} to="/genres">
          Genres
        </NavLink>
      </nav>
    </header>
  );
}
