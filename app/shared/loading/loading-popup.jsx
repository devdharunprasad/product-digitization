"use client"
import Image from "next/image";
import { CircleNotch} from "phosphor-react";
import React from "react";
import { loadingMessages } from "../utils/lang";

const LoadingPopup = () => {
  return (

    <section className="fixed top-0 transform -translate-y-[90%]  left-0 h-screen w-full max-w-[500px] z-40 bg-primary flex flex-col gap-5 items-center justify-center text-white">
        <Image src = "/loader.png" alt = "loader" width={150} height={150} className=""/>
        <h2 className="font-semibold">
         ONDC {loadingMessages.network}
        </h2>
        <p className="text-center w-10/12">{loadingMessages.message}</p>
        <CircleNotch size = "32" color ="white" className="animate-spin" />
    </section>
  );
};

export default LoadingPopup;
