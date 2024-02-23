"use client";

import {
  Benefit,
  Mineral,
  Product,
  ProductsHandlerProps,
} from "@/types/products";
import ProductList from "../ProductList/ProductList";
import ProductFilter from "../ProductFilter/ProductFilter";
import { useEffect, useState } from "react";
import ProductSorter from "../ProductSorter/ProductSorter";
import { forceCheck } from "react-lazyload";

import FilterIcon from "../../../public/images/icons/filter.svg";
import Image from "next/image";

const ProductsHandler = ({ fetchedProducts, title }: ProductsHandlerProps) => {
  const [initialPriceRange, setInitialPriceRange] = useState([0, 0]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [mineralFilter, setMineralFilter] = useState<string[]>([]);
  const [benefitFilter, setBenefitFilter] = useState<string[]>([]);
  const [initialRender, setInitialRender] = useState(true);
  const [sortTitle, setSortTitle] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterKey, setFilterKey] = useState(0);
  const [mineralsAvailable, setMineralsAvailable] = useState<Mineral[]>([]);
  const [benefitsAvailable, setBenefitsAvailable] = useState<Benefit[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const isMobile = true;

  const resetFilters = () => {
    setSortTitle("");

    setFilterKey((prevKey) => prevKey + 1);
  };

  if (fetchedProducts && initialRender) {
    setInitialRender(false);
    resetFilters();
    let maxPriceValue = 0;
    let minPriceValue = Infinity;

    fetchedProducts.forEach((product) => {
      maxPriceValue = Math.max(maxPriceValue, product.price);
      minPriceValue = Math.min(minPriceValue, product.price);
    });

    if (minPriceValue === Infinity) {
      minPriceValue = 0;
    }

    setInitialPriceRange([minPriceValue, maxPriceValue]);
    setPriceRange([minPriceValue, maxPriceValue]);
    determineMinerals(fetchedProducts);
  }

  useEffect(() => {
    if (mineralsAvailable) {
      determineBenefits(mineralsAvailable);
    }
  }, [mineralsAvailable]);

  function determineMinerals(products: Product[]) {
    const uniqueMinerals = new Map();

    products.forEach((product) => {
      if (product.mineral && Array.isArray(product.mineral)) {
        product.mineral.forEach((mineral) => {
          if (mineral._id && !uniqueMinerals.has(mineral._id)) {
            uniqueMinerals.set(mineral._id, mineral);
          }
        });
      }
    });

    const uniqueMineralObjects = Array.from(uniqueMinerals.values());

    uniqueMineralObjects.sort((a, b) => a.name.localeCompare(b.name, "hu"));

    setMineralsAvailable(uniqueMineralObjects);
  }

  function determineBenefits(minerals: Mineral[]) {
    const uniqueBenefits = new Map();

    minerals.forEach((mineral) => {
      if (mineral.benefit && Array.isArray(mineral.benefit)) {
        mineral.benefit.forEach((benefit) => {
          if (benefit._id && !uniqueBenefits.has(benefit._id)) {
            uniqueBenefits.set(benefit._id, benefit);
          }
        });
      }
    });

    const uniqueBenefitObjects = Array.from(uniqueBenefits.values());

    uniqueBenefitObjects.sort((a, b) => a.name.localeCompare(b.name, "hu"));

    setBenefitsAvailable(uniqueBenefitObjects);
  }

  function applyFilters(products: Product[]) {
    return products.filter((product) => {
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesColor =
        colorFilter.length === 0 ||
        product.color.some((pColor) => colorFilter.includes(pColor.code));

      const matchesMineral =
        mineralFilter.length === 0 ||
        (product.mineral !== null &&
          product.mineral.some((pMineral) =>
            mineralFilter.includes(pMineral.name)
          ));

      const matchesBenefit =
        benefitFilter.length === 0 ||
        (product.mineral !== null &&
          product.mineral.some((mineralItem) =>
            mineralItem.benefit.some((pBenefit) =>
              benefitFilter.includes(pBenefit._id)
            )
          ));

      return matchesPrice && matchesColor && matchesMineral && matchesBenefit;
    });
  }

  function applySorting(products: Product[]) {
    let sortedProducts = [...products];
    switch (sortTitle) {
      case "1": // Price Ascending
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "2": // Price Descending
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "3": // Newest
        sortedProducts.sort(
          (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
        );
        break;
      default:
        break;
    }

    return sortedProducts;
  }

  useEffect(() => {
    if (fetchedProducts) {
      let filtered = applyFilters(fetchedProducts);
      let sortedFiltered = applySorting(filtered);
      setIsFiltered(true);
      setFilteredProducts(sortedFiltered);
    }
  }, [
    fetchedProducts,
    priceRange,
    colorFilter,
    mineralFilter,
    benefitFilter,
    sortTitle,
  ]);

  useEffect(() => {
    forceCheck();
  }, [filteredProducts]);

  const handleFilterChange = (filterType, value) => {
    const filterSetters = {
      price: setPriceRange,
      color: setColorFilter,
      mineral: setMineralFilter,
      benefit: setBenefitFilter,
    };
    filterSetters[filterType]?.(value);
  };

  const handleSortChange = (event) => {
    setSortTitle(event.target.value);
  };

  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
    if (!showFilter) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <>
      {showFilter && (
        <div
          className="overlay"
          style={{ display: "block" }}
          onClick={toggleFilterVisibility}
        ></div>
      )}
      <div className="products-page-container">
        <div
          className={`product-filter-container ${
            showFilter ? "visible" : "hidden"
          }`}
        >
          <ProductFilter
            key={filterKey}
            onFilterChange={handleFilterChange}
            priceRange={priceRange}
            minMaxValues={initialPriceRange}
            toggleFilterVisibility={toggleFilterVisibility}
            resetFilters={resetFilters}
            showFilter={showFilter}
            mineralsAvailable={mineralsAvailable}
            benefitsAvailable={benefitsAvailable}
            productSorter={
              <ProductSorter
                sortTitle={sortTitle}
                handleSortChange={handleSortChange}
              />
            }
          />
        </div>
        <div className="products-page-main">
          <h1 className="products-page-title">
            <div className="actual-title">
              {title ? title : "Összes termék"}
              <span>
                {!isMobile && filteredProducts
                  ? "(" + filteredProducts.length + " termék)"
                  : ""}
              </span>
            </div>

            {!isMobile ? (
              <ProductSorter
                sortTitle={sortTitle}
                handleSortChange={handleSortChange}
              />
            ) : (
              ""
            )}
          </h1>
          {isMobile ? (
            <div className="products-page-divider">
              <div className="filtered-products-counter">
                {filteredProducts ? filteredProducts.length + " termék" : ""}
              </div>
              <button
                className="filter-button"
                onClick={toggleFilterVisibility}
              >
                <Image
                  src={FilterIcon}
                  className="base-svg"
                  alt="filter"
                  width={20}
                  height={20}
                />
                <span>Szűrő</span>
              </button>
            </div>
          ) : (
            ""
          )}

          {filteredProducts.length === 0 && !isFiltered ? (
            fetchedProducts.length !== 0 ? (
              <ProductList products={fetchedProducts} />
            ) : (
              <p>
                Sajnáljuk, de jelen pillanatban, nem tudunk terméket
                megjeleníteni. Készletünk folyamatosan növekszik, nézz vissza
                később! ❤️
              </p>
            )
          ) : filteredProducts.length !== 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p>
              Sajnáljuk, de jelen pillanatban, nem tudunk terméket
              megjeleníteni. Készletünk folyamatosan növekszik, nézz vissza
              később! ❤️
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsHandler;
