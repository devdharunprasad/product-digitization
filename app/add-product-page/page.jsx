"use client"
import React from "react";
import FormSection from "./components/Form";
import PageTitle from "../shared/page-title";
import { formPage } from "../shared/utils/lang";
import { useLangNumStore } from "../zustand/store";

const AddProductPage = () => {
    
  const {langNum} = useLangNumStore(state => state)
  return ( 
    <main className="">
      <PageTitle title={formPage.title[langNum]} icon={"Product"} />
    <div className="mt-10">
      <FormSection formPage = {formPage} />
      </div>
    </main>
  );
};

export default AddProductPage;
