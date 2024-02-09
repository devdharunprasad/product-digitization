"use client"
import React from 'react'
import { useFormState } from 'react-hook-form'

const SubmitButton = () => {
    // const {pending} = useFormState()
  return (
    <button className="py-3 px-5 rounded-full mb-10 bg-primary text-white">
        Submit
      </button>
  )
}

export default SubmitButton