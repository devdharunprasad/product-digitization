import LoadingSpinner from '@/app/shared/loading/loading-spinner'
import { CircleNotch } from 'phosphor-react'
import React from 'react'
import { useFormState } from 'react-dom'

const SubmitButton = ({isLoading, buttonContent}) => {
  return (
    <button className="py-3 px-5 rounded-full flex justify-center items-center mb-10 bg-primary text-white" disabled = {isLoading}>
        {isLoading ? <LoadingSpinner/> : <>{buttonContent}</>}
      </button>
  )
}

export default SubmitButton