"use client";

import { Combination } from "../sample-data/processed-data";

interface IColorPalette {
  data: Combination[];
}

export default function ColorPalette(props: IColorPalette) {
  console.log(props.data);
  return <div>Color Palette</div>;
}
