"use client"
import { CircleNotch } from 'phosphor-react'
import React from 'react'
import { useFormState } from 'react-dom'

const SubmitButton = () => {
    const {pending} = useFormState()
  return (
    <button className="py-3 px-5 rounded-full mb-10 bg-primary text-white">
        {pending ? <CircleNotch size = {32} color = "white" /> :<>Submit</>}
      </button>
  )
}

export default SubmitButton