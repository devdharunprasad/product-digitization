import { create } from 'zustand'
import {devtools, persist} from "zustand/middleware"
export const useProductStore =(set) => ({
  product_store : null,
  addProduct: (product_store) => set((state) => ({ product_store })),
  removeAllBears: () => set({ bears: 0 }),
})

const langNumStore = (set) => ({
    langNum : 0,
    changeLangNum : (num) => set((state) => ({langNum : num}))
})


export const useLangNumStore = create(
  devtools(
    persist(langNumStore, {
      name : "langNum"
    })
  )
) 