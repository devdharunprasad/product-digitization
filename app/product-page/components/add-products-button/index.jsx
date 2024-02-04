"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Aperture, Plus, UploadSimple } from "phosphor-react";
import React, { useState } from "react";

const AddProducts = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    console.log("Works")
    const file = e.target.files[0];
    console.log(file)
    if(file){
      router.push('/add-product-page')
    }
  };
  console.log(open)
  return (
    <DropdownMenu open = {open} onOpenChange = {() => setOpen(true)}>
      <div className=" ">
        <DropdownMenuTrigger className = "flex justify-center items-center gap-3 bg-primary_blue border w-8/12 text-white h-12 mx-auto rounded-full text-center  px-5 py-2">
          <div className="flex items-center gap-3">
            <span>Add Products</span>
            <Plus size={20} color="white" />
          </div>
        </DropdownMenuTrigger >
        <DropdownMenuContent onInteractOutside = {() => setOpen(false)} className="ml-auto">
          <DropdownMenuItem className="relative">
            <p className="flex items-center gap-2">
              <Aperture size={20} />
              <span> Camera</span>
            </p>
            <input
              type="file"
              id="cam"
              onChange={handleChange}
              accept="image/*"
              capture="capture"
              className="w-full border opacity-0 absolute z-30"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="relative">
          <p className="flex items-center gap-2">
              <UploadSimple size={20} />
              <span> Upload</span>
            </p>
            <input
              type="file"
              id="cam"
              accept="image/*"
              //   capture="capture"
              onChange={handleChange}
              className="w-full border opacity-0 absolute z-30"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default AddProducts;
