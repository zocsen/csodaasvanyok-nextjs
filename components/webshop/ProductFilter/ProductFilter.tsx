"use client";

import BenefitFilter from "./BenefitFilter/BenefitFilter";
import ColorFilter from "./ColorFilter/ColorFilter";
import MineralFilter from "./MineralFilter/MineralFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import "./product-filter.scss";
import "./filter-accordion.scss";
import CloseIcon from "public/images/icons/close.svg";
import DeleteIcon from "public/images/icons/delete.svg";
import { ProductFilterProps } from "@/types/filter";
import Image from "next/image";
import IsMobileContext from "@/hooks/isMobileContext";
import { useContext } from "react";

const ProductFilter = ({
  onFilterChange,
  toggleFilterVisibility,
  resetFilters,
  priceRange,
  minMaxValues,
  productSorter,
  showFilter,
  mineralsAvailable,
  benefitsAvailable,
}: ProductFilterProps) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <div
      className={`product-filter-background ${
        !isMobile || showFilter ? "open" : ""
      }`}
    >
      <div className="product-filter">
        {isMobile && (
          <div className="close-header">
            <p>Szűrő</p>
            <button className="close-button" onClick={toggleFilterVisibility}>
              <Image
                src={CloseIcon}
                className="base-svg"
                alt="Close icon"
                width={34}
                height={34}
              />
            </button>
          </div>
        )}
        {isMobile && productSorter && (
          <div className="mobile-product-sorter">{productSorter}</div>
        )}

        <PriceFilter
          onValueChange={(value) => onFilterChange("price", value)}
          priceRange={priceRange}
          minMaxValues={minMaxValues}
        />
        <hr />
        <ColorFilter
          onValueChange={(value) => onFilterChange("color", value)}
        />
        <hr />
        <MineralFilter
          onValueChange={(value) => onFilterChange("mineral", value)}
          mineralsAvailable={mineralsAvailable}
        />
        <hr />
        <BenefitFilter
          onValueChange={(value) => onFilterChange("benefit", value)}
          benefitsAvailable={benefitsAvailable}
        />
        {!isMobile && (
          <button className="desktop-filter-reset" onClick={resetFilters}>
            Szűrők törlése{" "}
            <Image src={DeleteIcon} alt="Delete" width={24} height={24} />
          </button>
        )}
      </div>
      {isMobile && (
        <div className="filter-footer">
          <button className="footer-buttons delete" onClick={resetFilters}>
            Törlés{" "}
            <Image src={DeleteIcon} alt="Delete" width={24} height={24} />
          </button>
          <button
            className="footer-buttons save"
            onClick={toggleFilterVisibility}
          >
            Mentés
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
