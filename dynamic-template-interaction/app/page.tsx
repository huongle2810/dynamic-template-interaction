import ColorPalette from "./components/ColorPalette";
import styles from "./page.module.css";
import { getLocalData } from "./sample-data/processed-data";

export default async function Home() {
  const data = await getLocalData();

  return (
    <main className={styles.main}>
      <ColorPalette data={data} />
    </main>
  );
}
