import React from "react";

function ProductCard({ product, onAddToCart }) {
  const viewProductDetails = () => {
    console.log("Checking out details for:", product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <div className="product-actions">
        <button onClick={onAddToCart}>Add to Cart</button>
        <button onClick={viewProductDetails}>View Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
