import { ChangeEvent, useState } from "react";
import styles from "./ColorPicker.module.css";

interface IColorPicker {
  colorValue: string;
  setSelectedColor: (selectedColor: string) => void;
}

export default function ColorPickerPopover({
  colorValue,
  setSelectedColor,
}: IColorPicker) {
  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <label className={styles.colorPickerPopover}>
      <input
        className={styles.customizeColorInput}
        type="color"
        value={colorValue}
        onChange={handleColorChange}
      />
      <div className={styles.colorCode}>{colorValue}</div>
    </label>
  );
}
