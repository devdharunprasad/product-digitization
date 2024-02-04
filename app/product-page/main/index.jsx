import React from 'react'
import ProductList from '../components/products/product-list'
import {Notepad } from 'phosphor-react'
import PageTitle from '@/app/shared/page-title'

const ProductPage = () => {
  return (
    <main className='bg-[#EEEEEE] min-h-screen'>
      <PageTitle title = {"Product Catalouge"} icon = {"Product"}/>
        <ProductList/>
    </main>
  )
}

export default ProductPage