import React from 'react'
import { product_list } from '@/app/temp/dataset'
import ProductItem from '../product-item'
import { cookies } from 'next/headers'
import axios from 'axios'
const ProductList = async() => {
  const cookieStore = cookies()
  const user_id = cookieStore.get("uid")
  const {data:product_list_data} = await axios.get(`https://ondchackathon-production.up.railway.app/catalogue/${user_id.value}`)
  console.log({product_list_data})

  return (
    <section className='center-section mt-5 pb-16'>
        <div className='grid grid-cols-1 gap-5'>
        {
            product_list_data?.map(product => {
                return(
                    <ProductItem data = {product} key = {product_list_data?.product?.id}/>
                )
            })
        }
        </div>
    </section>
  )
}

export default ProductList