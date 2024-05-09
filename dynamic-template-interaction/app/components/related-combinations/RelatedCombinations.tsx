"use-client";
import {
  Combination,
  RelatedCombinationItem,
} from "@/app/sample-data/processed-data";
import styles from "./RelatedCombinations.module.css";
import { useEffect, useState } from "react";

interface IRelatedCombinations {
  combinations: Combination[];
  relatedCombinations: RelatedCombinationItem[];
  getTemplateId: (templateId: number) => void;
}

export default function RelatedCombinations({
  combinations,
  relatedCombinations,
  getTemplateId,
}: IRelatedCombinations) {
  const [currentRelatedCombinations, setCurrentRelatedCombinations] = useState<
    RelatedCombinationItem[]
  >(relatedCombinations.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setCurrentRelatedCombinations(relatedCombinations.slice(0, 5));
    setStartIndex(0);
  }, [relatedCombinations]);

  const loadMoreCombinations = () => {
    // get all distinct related combinations.
    const relatedCombinations = new Map<number, RelatedCombinationItem>();
    combinations.forEach((c) => {
      c.relatedCombinations.forEach((related) => {
        relatedCombinations.set(related.id, related);
      });
    });
    // find remain related combinations that distinct with current related combinations.
    const remainRelatedCombinations: RelatedCombinationItem[] = [];
    relatedCombinations.forEach((value, key, map) => {
      if (!currentRelatedCombinations.some((item) => item.id === value.id)) {
        remainRelatedCombinations.push(value);
      }
    });
    const newStartIndex =
      startIndex < remainRelatedCombinations.length - 1 ? startIndex + 5 : 0;
    const nextCurrentRelatedCombinations = remainRelatedCombinations.slice(
      newStartIndex,
      newStartIndex + 5
    );
    setStartIndex(newStartIndex);
    setCurrentRelatedCombinations(nextCurrentRelatedCombinations);
  };

  return (
    <div className={styles.relatedCombinationsContainer}>
      <div className={styles.sectionTitle}>Related Combinations</div>
      <div className={styles.combinations}>
        <div className={styles.combinationPalettes}>
          <div className={styles.combinationColumn}>
            {currentRelatedCombinations
              .slice(0, Math.ceil(currentRelatedCombinations.length / 2))
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
            {currentRelatedCombinations
              .slice(Math.ceil(currentRelatedCombinations.length / 2))
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
            <div className={styles.seeMore} onClick={loadMoreCombinations}>
              See more combinations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
