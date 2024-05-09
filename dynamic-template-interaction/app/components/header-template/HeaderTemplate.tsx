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
  const { l } = hexToHSL(mainColor);
  return (
    <div
      style={{
        background: mainColor,
      }}
      className={`${styles.headerTemplateContainer} ${styles.bgWave}`}
    >
      <div
        style={{ color: `${l > 50 ? "#000" : "#ffff"}` }}
        className={styles.headerTitle}
      >
        <div>{mainColorName}</div>
        <div>color combination</div>
      </div>
    </div>
  );
}
