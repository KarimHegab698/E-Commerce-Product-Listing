import React, { useEffect, useState, useCallback } from "react";
import ProductList from "./ProductList";
import ProductFilters from "./ProductFilters";
import "./style.css";

function ShopApp() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setAllProducts(data);
        setDisplayedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Whoops, couldn't load products:", err);
        setIsLoading(false);
      });
  }, []);

  const addToCart = () => {
    setCartItemCount((prev) => prev + 1);
  };

  const updateFilteredProducts = useCallback((newList) => {
    setDisplayedProducts(newList);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Shop</h1>
        <div className="cart-count">
          🛒{" "}
          <span>
            {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
          </span>
        </div>
      </header>

      <ProductFilters
        products={allProducts}
        onFilterUpdate={updateFilteredProducts}
      />

      <ProductList
        products={displayedProducts}
        onAddToCart={addToCart}
        loading={isLoading}
      />
    </div>
  );
}

export default ShopApp;
