"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { CircleNotch } from "phosphor-react";
import React from "react";

const LoadingSpinner = () => {
  return (

    <CircleNotch size={32} color = "white " className="animate-spin"/>
  );
};

export default LoadingSpinner;
