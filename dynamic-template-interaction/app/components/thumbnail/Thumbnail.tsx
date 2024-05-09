"use client";
import { Color } from "@/app/sample-data/processed-data";
import styles from "./Thumbnail.module.css";

interface IThumbnail {
  colors: Color[];
  imagePath: string;
}

export default function Thumbnail({ colors, imagePath }: IThumbnail) {
  return (
    <div
      className={styles.thumbnailContainer}
      style={{ backgroundImage: `url(./${imagePath})` }}
    >
      <div className={styles.colorStrip}>
        {colors.map((c) => (
          <div
            className={styles.colorSquareWrapper}
            style={{ width: `${100 / colors.length}%` }}
            key={c.hex}
          >
            <div className={styles.colorSquare} style={{ background: c.hex }} />
            <div className={styles.colorSquareName}>
              <div style={{ textDecoration: "underline" }}>{c.name}</div>
              <div style={{ color: "gray" }}>{c.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
