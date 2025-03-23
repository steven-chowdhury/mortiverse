import Image from "next/image";
import styles from "./page.module.css";
import CharacterList from './components/CharacterList';

export default function Home() {
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
