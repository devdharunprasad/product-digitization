"use client";
import LoadingSpinner from "@/app/shared/loading/loading-spinner";
import { deleteContents, duplicate } from "@/app/shared/utils/lang";
import { useLangNumStore } from "@/app/zustand/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DotsThreeVertical } from "phosphor-react";
import React, { useState } from "react";

const PopupButton = ({ product_id, catalog_id }) => {

  const {langNum} = useLangNumStore(state => state)
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const handleDelte = async (id) => {
    setIsLoading(true);
    try {
     const {data} =  await axios.delete(
        `https://ondchackathon-production.up.railway.app/product/${id}`
      );
      console.log({onDelete : data})
      router.refresh();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-4 right-2">
      <Popover>
        <PopoverTrigger>
          <DotsThreeVertical size={25} />
        </PopoverTrigger>
        <PopoverContent className="w-fit flex flex-col" align="end">
          <Link href={`/duplicate/${catalog_id}`}>{duplicate[langNum]}</Link>
          <Dialog>
            <DialogTrigger className="text-left">{deleteContents.trigger[langNum]}</DialogTrigger>
            <DialogContent>
              <DialogTitle>{deleteContents.title[langNum]}</DialogTitle>
              {isLoading ? (
                <LoadingSpinner  color="green"/>
              ) : (
                <div className="flex justify-center gap-5 items-center">
                  <DialogClose className="bg-primary px-4 py-2 rounded-md text-white">
                    {deleteContents.noButton[langNum]}
                  </DialogClose>
                  
                  <Button
                    variant="outline"
                    onClick={() => handleDelte(product_id)}
                  >
                    {deleteContents.yesButton[langNum]}
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopupButton;
