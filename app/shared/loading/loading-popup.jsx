"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { CircleNotch } from "phosphor-react";
import React from "react";

const LoadingPopup = () => {
  return (

    <CircleNotch size={32} color = "white " className="animate-spin"/>
  );
};

export default LoadingPopup;
