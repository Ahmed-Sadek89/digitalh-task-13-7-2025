import { CustomTable } from '@/components/section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'For DigitalH Task description'
}
const page = () => {
  return (
    <main className='flex justify-center items-center bg-black min-h-screen text-white'>
      <div className='mx-auto px-4 pt-32 pb-10 w-full max-w-7xl'>
        <CustomTable />
      </div>
    </main>
  )
}

export default page
