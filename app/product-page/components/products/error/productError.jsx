"use client"
import { productError } from '@/app/shared/utils/lang'
import { useLangNumStore } from '@/app/zustand/store'
import React from 'react'

const ProductError = ({message}) => {
    const {langNum} = useLangNumStore(state => state)
  return (
    <span>{productError[langNum]}</span>
  )
}

export default ProductError