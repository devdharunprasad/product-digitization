"use client"
import { useProductStore } from '@/app/zustand/store'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormSection = () => {
    const {product_store} = useProductStore(state => state)

    const [categoryList, setCategoryList] = useState([product_store?.category] || [])
    const [category, setCategory] = useState("")
    console.log({categoryList})
    console.log({category})
    const {
        register,
        handleSubmit,
        watch,
        formState : {errors},
    } = useForm()

    const onSubmit = (data) => {

    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='center-section flex flex-col gap-5'>
        <Image src = {product_store?.image || "/default-product.png"} width={200} height={200} alt = {product_store?.name} className='mx-auto' />
        <label>
            <span className='mb-2'>Item Name</span>
            <input type = "text" defaultValue={product_store?.name} placeholder='Item Name' className='border border-black w-full h-14 px-3 rounded-lg' {...register("name", {required : true})} />
        </label>
        <label>
        <span className='mb-2'>Description</span>
            <textarea type = "text" defaultValue={product_store?.description} placeholder='Description' className='border border-black w-full h-32 pt-3 px-3 rounded-lg' {...register("description", {required : true})} />
        </label>
        <label>
        <span className='mb-2'>Price</span>
            <input type = "number" placeholder='Price' defaultValue={product_store?.price} className='border border-black w-full h-14 px-3 rounded-lg' {...register("price", {required : true})} />
        </label>
        <div>
            <span className='mb-2'>Categories</span>
          <label className='border border-black w-full h-14 px-3 rounded-lg flex justify-between items-center'>
            <input type = "text" placeholder='Type Category' className = "outline-none border-none w-10/12" value={category} onChange={(e) => setCategory(e.target.value)}  />
            <span onClick={() => {
                setCategoryList(prev => [category, ...prev])
                setCategory("")
            }
                }>Enter</span>
            </label>
            <div className='mt-5 flex flex-wrap gap-2'>
            {categoryList && categoryList?.length > 0 && categoryList.map(list => (
                <Badge variant="outline" className="px-3" key = {list}>{list} </Badge>
            ))}
            </div>

        </div>
        <label>
        <span className='mb-2'>Variants</span>
            <input type = "text" placeholder='Variant' defaultValue = {product_store?.variant?.size} className='border border-black w-full h-14 px-3 rounded-lg' {...register("variant", {required : true})} />
                <span>{Object.keys(product_store?.variants || {})}</span>
        </label>
        {/* {JSON.stringify(product_store)} */}
        <button className='py-3 px-5 rounded-full bg-primary_blue text-white'>
            Submit
        </button>
    </form>
  )
}

export default FormSection