"use client";
import { Notepad } from "phosphor-react";
import React from "react";

const PageTitle = ({ title, icon }) => {
  return (
    <h1 className="py-5 px-2 text-white bg-primary_blue flex items-center gap-3">
      {icon === "Product" && <Notepad size={32} color="white" />}
      <span className="text-center">{title}</span>
    </h1>
  );
};

export default PageTitle;
