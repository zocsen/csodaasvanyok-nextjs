import { ReactNode } from "react";
import { Benefit, Mineral } from "./products";

export interface ProductFilterProps {
  onFilterChange: (
    type: string,
    value: string | number | string[] | number[]
  ) => void;
  priceRange: number[];
  minMaxValues: number[];
  toggleFilterVisibility: () => void;
  productSorter: ReactNode;
  resetFilters: () => void;
  showFilter: boolean;
  mineralsAvailable: Mineral[];
  benefitsAvailable: Benefit[];
}

export type Color = {
  code: string;
  name: string;
};

export interface BenefitFilterProps {
  onValueChange: (value: string[]) => void;
  benefitsAvailable: Benefit[];
}

export interface MineralFilterProps {
  onValueChange: (value: string[]) => void;
  mineralsAvailable: Mineral[];
}

export interface ColorFilterProps {
  onValueChange: (value: string[]) => void;
}

export interface PriceFilterProps {
  onValueChange: (value: number[]) => void;
  priceRange: number[];
  minMaxValues: number[];
}
