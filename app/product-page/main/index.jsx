import React from 'react'
import ProductList from '../components/products/product-list'
import {Notepad } from 'phosphor-react'
import PageTitle from '@/app/shared/page-title'
import AddProducts from '../components/add-products-button'

const ProductPage = () => {
  return (
    <main className='bg-[#EEEEEE] min-h-screen relative'>
      <PageTitle title = {"Product Catalouge"} icon = {"Product"}/>
        <ProductList/>
        <div className='absolute bottom-5 w-full left-1/2 transform -translate-x-1/2'>
        <AddProducts/>
        </div>
    </main>
  )
}

export default ProductPage