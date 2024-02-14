import { create } from 'zustand'
import {devtools, persist} from "zustand/middleware"

export const useProductStore =create((set) => ({
  product_store : null,
  addProduct: (product) => set((state) => ({ product_store : product })),
}))

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