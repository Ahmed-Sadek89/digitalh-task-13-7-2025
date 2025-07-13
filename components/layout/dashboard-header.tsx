import Image from 'next/image'
import React from 'react'

const DashboardHeader = () => {
  return (
    <header className='top-0 right-0 left-0 z-50 fixed bg-black shadow-sm border-gray-300 border-b'>
      <div className='mx-auto px-4 max-w-7xl container'>
        <div className='flex flex-wrap justify-between items-center py-4'>
          <div className='flex items-center space-x-4'>
            <h1 className='font-semibold text-white text-xl'>Dashboard</h1>
          </div>
          <nav className='flex items-center space-x-6'>
            <span className='text-gray-300 hover:text-white transition-colors'>
              Welcome: user_name
            </span>
            <span className='text-gray-300 hover:text-white transition-colors'>
              user_email
            </span>
            {/* https://imgur.com/yhW6Yw1  API*/}
            {/* https://i.imgur.com/yhW6Yw1.jpeg IMAge link */}
            <Image
              src={`https://i.imgur.com/yhW6Yw1.jpeg`}
              alt='user'
              width={40}
              height={40}
              className='rounded-full w-[40px] h-[40px]'
            />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
