"use client";
import React from "react";

import PageTitle from "@/app/shared/page-title";
import AddProducts from "../components/add-products-button";
import { productTitle } from "@/app/shared/utils/lang";
import { addProductButton } from "@/app/shared/utils/lang";
import { useLangNumStore } from "@/app/zustand/store";

const ProductClientComponents = ({ children }) => {
    const {langNum} = useLangNumStore(state => state)
  return (
    <div>
      <PageTitle title={productTitle[langNum]} icon={"Product"} />
      {children}
      <div className="fixed bottom-5 w-full left-1/2 transform -translate-x-1/2 max-w-[500px]">
        <AddProducts addProductButtonContent={addProductButton[langNum]} />
      </div>
    </div>
  );
};

export default ProductClientComponents;
