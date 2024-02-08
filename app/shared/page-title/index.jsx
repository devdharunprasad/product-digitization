"use client";
import { Notepad } from "phosphor-react";
import React from "react";
import { logout } from "../utils/logout";
import { useRouter } from "next/navigation";

const PageTitle = ({ title, icon }) => {
  const router = useRouter()
  const handleLogout = () => {
    const hasLoggedOut = logout()
    if(hasLoggedOut){
      router.push("/login")
    }
  }
  return (
    <h1 className="py-5 px-2 text-white bg-primary_blue flex items-center gap-3">
      {icon === "Product" && <Notepad size={32} color="white" />}
      <span className="text-center">{title}</span>
      <button className="ml-auto" onClick={handleLogout}>Logout</button>
    </h1>
  );
};

export default PageTitle;
