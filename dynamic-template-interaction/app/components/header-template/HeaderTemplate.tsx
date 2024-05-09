"use client";
import hexToHSL from "@/app/utils/hextoHSL";
import styles from "./HeaderTemplate.module.css";

interface HeaderTemplate {
  mainColorName: string;
  mainColor: string;
}

export default function HeaderTemplate({
  mainColorName,
  mainColor,
}: HeaderTemplate) {
  const { h, s, l } = hexToHSL(mainColor);
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, hsl(${h}, ${s}%, ${l}%), hsl(${h}, 80%, 95%))`,
      }}
      className={`${styles.headerTemplateContainer} ${styles.bgWave}`}
    >
      <div className={styles.headerTitle}>
        <div>{mainColorName}</div>
        <div>color combination</div>
      </div>
    </div>
  );
}
