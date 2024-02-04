import React from 'react'
import { product_list } from '@/app/temp/dataset'
import ProductItem from '../product-item'
const ProductList = () => {
  return (
    <section className='center-section mt-5'>
        <div className='grid grid-cols-1 gap-5'>
        {
            product_list.map(product => {
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