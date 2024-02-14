"use client"
import React from "react";
import StockToggle from "../stock-toggle";
import PopupButton from "../popup-button";
import { useLangNumStore } from "@/app/zustand/store";
import { productItem } from "@/app/shared/utils/lang";

const ProductItem = ({ data }) => {

  const {langNum} = useLangNumStore(state => state)

  return (
    <div className="border rounded-lg p-5 flex flex-col gap-1 bg-white shadow-lg relative">
      <PopupButton product_id = {data?.id} catalog_id={data?.catalogid}/>
      <h1>{data?.name[langNum]}</h1>
      <p>{data?.category}</p>
      <p className="flex gap-2">
        <span>₹{data?.discount_price || data?.price - 20 }</span>
        <s>₹{data?.price}</s>
      </p>
     <div>
        {Number(data?.inv) > 0 ? (
          <span className="text-green-600">{productItem[langNum]} ({data?.inv})</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
    
     </div>
    </div>
  );
};

export default ProductItem;
