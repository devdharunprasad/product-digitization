"use client"
import React, { useEffect } from 'react'
import { useProductStore } from '../zustand/store'
import FormSection from './components/Form'

const AddProductPage = () => {
  const {product_store} = useProductStore(state => state)

  useEffect(() => {

  })
  return (
    <div className='center-section mt-20'>
     <FormSection/>
      
    </div>
  )
}

export default AddProductPage