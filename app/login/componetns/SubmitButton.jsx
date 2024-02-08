import LoadingSpinner from '@/app/shared/loading/loading-spinner';
import React from 'react'
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    console.log(pending);
  return (
    <button
          aria-disabled={pending}
          className="bg-primary_blue text-white mx-auto mt-5 rounded-full w-8/12 px-6 py-3 flex justify-center items-center"
        >
          {pending ? <LoadingSpinner/> : `Submit`}
        </button>
  )
}

export default SubmitButton