"use client";

import {
  Benefit,
  Mineral,
  Product,
  ProductsHandlerProps,
} from "@/types/products";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ProductList from "../ProductList/ProductList";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductSorter from "../ProductSorter/ProductSorter";

import FilterIcon from "@public/images/icons/filter.svg";
import Image from "next/image";
import IsMobileContext from "@/hooks/isMobileContext";

const ProductsHandler = ({ fetchedProducts, title }: ProductsHandlerProps) => {
  const [initialPriceRange, setInitialPriceRange] = useState([0, 0]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
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
  const isMobile = useContext(IsMobileContext);
  const [isClicked, setIsClicked] = useState(false);

  const loadMoreButtonRef = useRef(null);

  const loadMoreProducts = useCallback(() => {
    if (!isClicked) {
      setIsClicked(true);
    }
    setVisibleProducts(filteredProducts.slice(0, visibleProducts.length + 12));
  }, [filteredProducts, isClicked, visibleProducts.length]);

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

  const applyFilters = useCallback(
    (products: Product[]) => {
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
    },
    [priceRange, colorFilter, mineralFilter, benefitFilter]
  );

  const applySorting = useCallback(
    (products: Product[]) => {
      let sortedProducts = [...products];
      switch (sortTitle as any) {
        case 1: // Price Ascending
          sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case 2: // Price Descending
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 3: // Newest
          sortedProducts.sort((a, b) => {
            if (a.dateCreated && b.dateCreated) {
              return (
                new Date(b.dateCreated).getTime() -
                new Date(a.dateCreated).getTime()
              );
            } else {
              return 0;
            }
          });
          break;
        default:
          break;
      }

      return sortedProducts;
    },
    [sortTitle]
  );

  useEffect(() => {
    if (fetchedProducts) {
      let filtered = applyFilters(fetchedProducts);
      let sortedFiltered = applySorting(filtered);
      setIsFiltered(true);
      setFilteredProducts(sortedFiltered);
      setVisibleProducts(sortedFiltered.slice(0, 12));
    }
  }, [
    fetchedProducts,
    priceRange,
    colorFilter,
    mineralFilter,
    benefitFilter,
    sortTitle,
    applyFilters,
    applySorting,
  ]);

  type FilterType = "price" | "color" | "mineral" | "benefit";

  const handleFilterChange = (
    filterType: FilterType,
    value: string | number | string[] | number[]
  ) => {
    const filterSetters = {
      price: setPriceRange as (value: [number, number]) => void,
      color: setColorFilter as (value: string[]) => void,
      mineral: setMineralFilter as (value: string[]) => void,
      benefit: setBenefitFilter as (value: string[]) => void,
    };
    filterSetters[filterType]?.(value as any);
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  useEffect(() => {
    if (!isClicked) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMoreProducts();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loadMoreButtonRef.current) {
      observer.observe(loadMoreButtonRef.current);
    }

    return () => {
      if (loadMoreButtonRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loadMoreButtonRef.current);
      }
    };
  }, [isClicked, loadMoreProducts, visibleProducts]);

  return (
    <>
      {showFilter && isMobile && (
        <div
          className="overlay"
          style={{ display: "block" }}
          onClick={toggleFilterVisibility}
        ></div>
      )}
      <div className="products-page-container">
        <div
          className={`product-filter-container ${
            !isMobile || showFilter ? "visible" : "hidden"
          }`}
        >
          <ProductFilter
            key={filterKey}
            onFilterChange={(type, value) =>
              handleFilterChange(type as FilterType, value)
            }
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
            <>
              <ProductList products={visibleProducts} />
              {visibleProducts.length < filteredProducts.length && (
                <button
                  ref={loadMoreButtonRef}
                  onClick={loadMoreProducts}
                  className="load-more box-shadow-border"
                >
                  Mutass többet
                </button>
              )}
            </>
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
