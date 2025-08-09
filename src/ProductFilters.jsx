import React, { useState, useEffect } from "react";

function ProductFilters({ products, onFilterUpdate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  useEffect(() => {
    let filteredProducts = [...products];

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter((item) => item.category === selectedCategory);
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter((item) => item.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter((item) => item.price <= parseFloat(maxPrice));
    }

    onFilterUpdate(filteredProducts);
  }, [searchTerm, minPrice, maxPrice, selectedCategory, products, onFilterUpdate]);

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="search">Search Products</label>
        <input
          id="search"
          type="text"
          placeholder="Product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="min-price">Min Price</label>
        <input
          id="min-price"
          type="number"
          placeholder="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          min="0"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="max-price">Max Price</label>
        <input
          id="max-price"
          type="number"
          placeholder="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          min="0"
        />
      </div>
    </div>
  );
}

export default ProductFilters;