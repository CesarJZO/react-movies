import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header className={styles.menu}>
      <a className={styles.link} href="/">
        <h1>Movies</h1>
      </a>
      <nav>
        <a className={styles.link} href="/genres">
          Genres
        </a>
      </nav>
    </header>
  );
}
