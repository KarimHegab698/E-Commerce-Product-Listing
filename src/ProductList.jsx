import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, loading }) {
  if (loading) {
    return <p>Hold On, Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;