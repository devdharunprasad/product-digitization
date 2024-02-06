"use client";

import { useProductStore } from "@/app/zustand/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Plus } from "phosphor-react";
import React, { useEffect, useState } from "react";

const AddProducts = () => {
  const [isLoading,setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter();


  const {product_store, addProduct} = useProductStore(state => state)


  const handleChange = async (e) => {
    try {
      setLoading(true)
      const uploaded_file = e.target.files[0];
      console.log(uploaded_file);
      if (uploaded_file) {
        const formData = new FormData();
        formData.append("uploaded_file", uploaded_file, uploaded_file.name);
      const {data} = await axios.post(
          "https://ondchackathon-production.up.railway.app/process_image/",

          formData
        );
        console.log(data);
        if(data){
          router.push("/add-product-page")

        }
        addProduct(data)
      }
    } catch (err) {
      console.log({ err });
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  };


  return (
    <>
    {error && <p>{error}</p>}
    <form
      encType="multipart/form-data"
      className="flex justify-center items-center gap-3 text-white h-12 bg-primary_blue border w-8/12  px-5 py-2 mx-auto rounded-full"
    >
      <div className="flex items-center gap-3">
        {isLoading ? <p>Loading...</p> : (<><span>Add Products</span>
        <Plus size={20} color="white" /> </>) }
      </div>
      <input
        type="file"
        id="cam"
        onChange={handleChange}
        // accept="image/*"
        capture="capture"
        className="w-full border opacity-0 absolute z-30"
      />
    </form>
    </>
  );
};

export default AddProducts;
