"use client";
import React, { useEffect } from "react";
import { useProductStore } from "../zustand/store";
import FormSection from "./components/Form";
import PageTitle from "../shared/page-title";

const AddProductPage = () => {
  const { product_store } = useProductStore((state) => state);

  useEffect(() => {});
  return (
    <main className="">
      <PageTitle title={"Add Items"} icon={"Product"} />
    <div className="mt-10">
      <FormSection />
      </div>
    </main>
  );
};

export default AddProductPage;
