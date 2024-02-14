import React from 'react'
import ProductList from '../components/products/product-list'


import LoadingPopup from '@/app/shared/loading/loading-popup'
import ProductClientComponents from './main'

const ProductPage = () => {
  return (
    <main className='bg-[#EEEEEE] min-h-screen relative'>
        <ProductClientComponents>
        <ProductList/>
        </ProductClientComponents>
       
    </main>
  )
}

export default ProductPage