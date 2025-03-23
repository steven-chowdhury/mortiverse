import styles from "../page.module.css";
import CharacterList from './CharacterList';

export default function App() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CharacterList />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
