import React from 'react'
import { product_list } from '@/app/temp/dataset'
import ProductItem from '../product-item'
// import { cookies } from 'next/headers'
const ProductList = () => {
  // const cookieStore = cookies()
  // const user_id = cookieStore.get("uid")
  // const {data:product_list} = await axios.get(`https://ondchackathon-production.up.railway.app/add_to_catalog/${user_id.value}`)


  return (
    <section className='center-section mt-5'>
        <div className='grid grid-cols-1 gap-5'>
        {
            product_list?.map(product => {
                return(
                    <ProductItem product_item = {product} key = {product.id}/>
                )
            })
        }
        </div>
    </section>
  )
}

export default ProductList