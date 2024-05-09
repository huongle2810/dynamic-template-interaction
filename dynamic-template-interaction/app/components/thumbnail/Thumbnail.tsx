"use client";
import { Color } from "@/app/sample-data/processed-data";
import styles from "./Thumbnail.module.css";
import ColorPickerPopover from "../color-picker/ColorPicker";
import { useEffect, useState } from "react";

interface IThumbnail {
  colors: Color[];
  imagePath: string;
}

export default function Thumbnail({ colors, imagePath }: IThumbnail) {
  const [colorStrip, setColorStrip] = useState<Color[]>(colors);

  useEffect(() => {
    setColorStrip(colors);
  }, [colors]);

  return (
    <div
      className={styles.thumbnailContainer}
      style={{ backgroundImage: `url(./${imagePath})` }}
    >
      <div className={styles.colorStrip}>
        {colorStrip.map((c) => {
          return (
            <div
              className={styles.colorSquareWrapper}
              style={{ width: `${100 / colors.length}%` }}
              key={c.hex}
            >
              <div
                className={styles.colorSquare}
                style={{ background: c.hex }}
              />
              <div className={styles.colorSquareName}>
                <div style={{ textDecoration: "underline" }}>{c.name}</div>
                <ColorPickerPopover
                  colorValue={c.hex}
                  setSelectedColor={(selectedColor) => {
                    const nextColorStrip = colorStrip.map((color) => {
                      if (color.hex === c.hex)
                        return { ...color, hex: selectedColor };
                      return color;
                    });
                    setColorStrip(nextColorStrip);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
