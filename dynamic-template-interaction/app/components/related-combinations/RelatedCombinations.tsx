"use-client";
import { RelatedCombinationItem } from "@/app/sample-data/processed-data";
import styles from "./RelatedCombinations.module.css";

interface IRelatedCombinations {
  relatedCombinations: RelatedCombinationItem[];
  getTemplateId: (templateId: number) => void;
}

export default function RelatedCombinations({
  relatedCombinations,
  getTemplateId,
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
                <div
                  key={item.id}
                  onClick={() => getTemplateId(item.id)}
                  className={styles.combinationPaletteItem}
                >
                  {item.colors.map((color, index) => (
                    <div
                      key={color}
                      className={`${styles.colorCell} ${
                        index === 0 ? styles.firstColorCell : ""
                      } ${
                        index === item.colors.length - 1
                          ? styles.lastColorCell
                          : ""
                      }`}
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
                <div
                  key={item.id}
                  onClick={() => getTemplateId(item.id)}
                  className={styles.combinationPaletteItem}
                >
                  {item.colors.map((color, index) => (
                    <div
                      key={color}
                      className={`${styles.colorCell} ${
                        index === 0 ? styles.firstColorCell : ""
                      } ${
                        index === item.colors.length - 1
                          ? styles.lastColorCell
                          : ""
                      }`}
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
