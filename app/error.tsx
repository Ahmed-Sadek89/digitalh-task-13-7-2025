'use client'
import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-y-10 text-center container'>
        <h2 className='font-bold text-red-700 text-4xl md:text-7xl uppercase'>
          Something went wrong
        </h2>
        <p className='text-main text-xl italic'>{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className='bg-primary hover:bg-secondary px-10 py-2 rounded-full text-white text-xl transition duration-300'
        >
          Reload the page
        </button>
      </div>
    </div>
  )
}
