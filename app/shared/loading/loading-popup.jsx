"use client";
import Image from "next/image";
import { CircleNotch } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { loadingMessages } from "../utils/lang";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useLangNumStore } from "@/app/zustand/store";

const LoadingPopup = () => {
const {langNum} = useLangNumStore(state => state)

  return (
    <section className="fixed top-0 transform -translate-y-[90%]  left-0 h-screen w-full max-w-[500px] z-40 bg-primary flex flex-col gap-5 items-center justify-center text-white">
      <Image
        src="/loader.png"
        alt="loader"
        width={150}
        height={150}
        className=""
      />
      <h2 className="font-semibold">ONDC {loadingMessages.network[langNum]}</h2>
      <Carousel    plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent className="">
          {loadingMessages?.message[langNum]?.map((message) => (
            <CarouselItem key = {message}>
              <p className="text-white text-center w-8/12 mx-auto">{message}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CircleNotch size="32" color="white" className="animate-spin" />
    </section>
  );
};

export default LoadingPopup;
