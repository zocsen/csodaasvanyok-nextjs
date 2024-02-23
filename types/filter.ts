import { ReactNode } from "react";

export interface ProductFilterProps {
  onFilterChange: (type: string, value: string | number) => void;
  priceRange: number[];
  minMaxValues: number[];
  toggleFilterVisibility: () => void;
  productSorter: ReactNode;
  resetFilters: () => void;
  showFilter: boolean;
  mineralsAvailable: string[];
  benefitsAvailable: string[];
}

export interface BenefitFilterProps {
  onValueChange: (value: string[]) => void;
  benefitsAvailable: string[];
}

export interface MineralFilterProps {
  onValueChange: (value: string[]) => void;
  mineralsAvailable: string[];
}

export interface ColorFilterProps {
  onValueChange: (value: string[]) => void;
}

export interface PriceFilterProps {
  onValueChange: (value: number[]) => void;
  priceRange: number[];
  minMaxValues: number[];
}
