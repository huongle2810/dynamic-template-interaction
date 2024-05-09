"use-client";
import { RelatedCombinationItem } from "@/app/sample-data/processed-data";
import styles from "./RelatedCombinations.module.css";

interface IRelatedCombinations {
  relatedCombinations: RelatedCombinationItem[];
}

export default function RelatedCombinations({
  relatedCombinations,
}: IRelatedCombinations) {
  return (
    <div className={styles.relatedCombinationsContainer}>
      <div className={styles.sectionTitle}>Related Combinations</div>
      <div className={styles.combinations}>
        <div className={styles.combinationPalettes}>
          <div className={styles.combinationColumn}>
            {relatedCombinations
              .slice(0, Math.ceil(relatedCombinations.length / 2))
              .map((item) => (
                <div key={item.id} className={styles.combinationPaletteItem}>
                  {item.colors.map((color) => (
                    <div
                      key={color}
                      className={styles.colorCell}
                      style={{ background: `${color}`, width: `${100 / 4}%` }}
                    />
                  ))}
                </div>
              ))}
          </div>

          <div className={styles.combinationColumn}>
            {relatedCombinations
              .slice(Math.ceil(relatedCombinations.length / 2))
              .map((item) => (
                <div key={item.id} className={styles.combinationPaletteItem}>
                  {item.colors.map((color) => (
                    <div
                      key={color}
                      className={styles.colorCell}
                      style={{ background: `${color}`, width: `${100 / 4}%` }}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
