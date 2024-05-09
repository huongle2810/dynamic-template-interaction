"use client";

import { useState } from "react";
import { Combination } from "../../sample-data/processed-data";
import HeaderTemplate from "../header-template/HeaderTemplate";
import RelatedCombinations from "../related-combinations/RelatedCombinations";
import Thumbnail from "../thumbnail/Thumbnail";

interface IColorPalette {
  data: Combination[];
}

export default function ColorPalette({ data }: IColorPalette) {
  const [template, setTemplate] = useState<Combination>(data[0]);

  console.log({ template });

  return (
    <div>
      <HeaderTemplate
        mainColor={template.combination.color.hex}
        mainColorName={template.combination.name}
      />
      <Thumbnail
        imagePath={template.combination.featuredImage.url}
        colors={template.combination.colors}
      />
      <RelatedCombinations relatedCombinations={template.relatedCombinations} />
    </div>
  );
}
