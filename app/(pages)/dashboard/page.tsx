import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "Dashboard",
  description: 'For DigitalH Task description'
}
const page = () => {
  return (
    <main className='flex justify-center items-center bg-black min-h-screen text-white'>page</main>
  )
}

export default page