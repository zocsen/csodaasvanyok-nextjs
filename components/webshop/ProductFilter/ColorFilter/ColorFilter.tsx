"use client";

import { useEffect, useState } from "react";
import "./color-filter.scss";
import ExpandMoreIcon from "public/images/icons/expand-more.svg";
import { Color, ColorFilterProps } from "@/types/filter";
import Image from "next/image";

const ColorFilter = ({ onValueChange }: ColorFilterProps) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const colors = [
    { name: "Arany", code: "#E5B80B" },
    { name: "Barna", code: "#B98332" },
    { name: "Citrom", code: "#FFEF5F" },
    { name: "Ezüst", code: "#D3D3D3" },
    { name: "Fehér", code: "#FFFFFF" },
    { name: "Fekete", code: "#303030" },
    { name: "Kék", code: "#1371D5" },
    { name: "Lila", code: "#AB40FF" },
    { name: "Narancs", code: "#FFA756" },
    { name: "Piros", code: "#FF2F2F" },
    { name: "Rose gold", code: "#F1D0CC" },
    { name: "Rózsaszín", code: "#F9B7FF" },
    { name: "Szürke", code: "#E4E4E4" },
    { name: "Zöld", code: "#008F00" },
  ];

  interface CheckmarkIconProps {
    className?: string;
  }

  const CheckmarkIcon = ({ className }: CheckmarkIconProps) => (
    <svg
      className={`checkmark-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M9 16.17L5.53 12.7a.75.75 0 00-1.06 0 .75.75 0 000 1.06l4 4c.29.29.77.29 1.06 0l10-10a.75.75 0 10-1.06-1.06L9 16.17z" />
    </svg>
  );

  const onColorSelect = (color: Color): void => {
    if (isSelected(color)) {
      setSelectedColors((prevColors) =>
        prevColors.filter((c) => c !== color.code)
      );
    } else {
      setSelectedColors((prevColors) => [...prevColors, color.code]);
    }
  };

  const isSelected = (color: Color): boolean => {
    return selectedColors.includes(color.code);
  };

  useEffect(() => {
    onValueChange(selectedColors);
  }, [onValueChange, selectedColors]);

  return (
    <div className="filter-block">
      <button
        className="filter-accordion"
        onClick={() => setIsPanelVisible(!isPanelVisible)}
      >
        <span>Szín</span>
        <Image
          src={ExpandMoreIcon}
          className={`arrow-img base-svg ${isPanelVisible ? "rotate-180" : ""}`}
          alt="expand"
        />
      </button>
      <div className={`${isPanelVisible ? "open" : ""} panel`}>
        <div className="color-palette">
          {colors.map((color) => (
            <div
              key={color.code}
              className={`color-swatch${
                isSelected(color) ? " selected" : ""
              } box-shadow-border`}
              style={{ backgroundColor: color.code }}
              onClick={() => onColorSelect(color)}
            >
              {isSelected(color) && <CheckmarkIcon className="selected" />}
              <span style={{ whiteSpace: "nowrap" }}>{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
