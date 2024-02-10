import React from "react";
import StockToggle from "../stock-toggle";

const ProductItem = ({ data }) => {
  return (
    <div className="border rounded-lg p-5 bg-white shadow-lg relative">
      <h1>{data?.product?.name}</h1>
      <p>{data?.product?.category}</p>
      <p className="flex gap-2">
        <span>₹{data?.catalog[0]?.discount_price || data?.catalog[0]?.price - 20 }</span>
        <s>₹{data?.catalog[0]?.price}</s>
      </p>
     <div>
        {Number(data?.catalog[0]?.inv) > 0 ? (
          <span className="text-green-600">In Stock ({data?.catalog[0]?.inv})</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
    
     </div>
    </div>
  );
};

export default ProductItem;
