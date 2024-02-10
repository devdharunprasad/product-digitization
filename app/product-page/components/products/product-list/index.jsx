import React from "react";
import { product_list } from "@/app/temp/dataset";
import ProductItem from "../product-item";
import { cookies } from "next/headers";
import axios from "axios";


const ProductList = async () => {
  const getData = async () => {
    try {
      const cookieStore = cookies();
      const user_id = cookieStore.get("uid");
      const { data: product_list_data } = await axios.get(
        `https://ondchackathon-production.up.railway.app/catalogue/${user_id.value}`
      ,{cache : false});
      console.log({ product_list_data });
      return { product_list_data, error: null };
    } catch (err) {
      console.log(err.message);
      return { product_list_data: null, error: err.message };
    }
  };

  const { product_list_data, error } = await getData();

  return (
    <section className="center-section mt-5 pb-16">
      <div className="grid grid-cols-1 gap-5">
        {error}
        <p className="text-primary text-center">
        {product_list_data?.message}
        </p>
        {Array.isArray(product_list_data) && product_list_data?.map((product) => {
          return (
            <ProductItem data={product} key={product_list_data?.product?.id} />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
