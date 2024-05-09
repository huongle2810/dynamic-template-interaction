"use client";

import { useState } from "react";
import { Combination } from "../../sample-data/processed-data";
import HeaderTemplate from "../header-template/HeaderTemplate";
import RelatedCombinations from "../related-combinations/RelatedCombinations";
import Thumbnail from "../thumbnail/Thumbnail";
import BrowseTemplate from "../browse-template/BrowseTemplate";

interface IColorPalette {
  data: Combination[];
}

export default function ColorPalette({ data }: IColorPalette) {
  const [template, setTemplate] = useState<Combination>(data[0]);

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
      <RelatedCombinations
        getTemplateId={(templateId) => {
          const foundTemplate = data.find(
            (d) => d.combination.id === templateId
          );
          if (foundTemplate) {
            setTemplate(foundTemplate);
          }
          console.log({ templateId, foundTemplate });
        }}
        relatedCombinations={template.relatedCombinations}
      />
      <BrowseTemplate mainColor={template.combination.color.hex} />
    </div>
  );
}
