import React from "react";
import StockToggle from "../stock-toggle";

const ProductItem = ({ product_item }) => {
  return (
    <div className="border rounded-lg p-5 bg-white shadow-lg relative">
      <h1>{product_item.name}</h1>
      <p>{product_item.category}</p>
      <p className="flex gap-2">
        <span>₹{product_item.sell_price}</span>
        <s>₹{product_item.cost_price}</s>
      </p>
      <div>
        {product_item.in_stock ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
      </div>
      <div className="absolute bottom-2 right-2">
      <StockToggle checked = {product_item?.in_stock ? true : false}/>
      </div>
    </div>
  );
};

export default ProductItem;
