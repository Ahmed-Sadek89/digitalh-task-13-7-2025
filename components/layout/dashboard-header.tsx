import { Profile } from '@/type'
import Image from 'next/image'
import { SignoutButton } from '@/components/section'

const DashboardHeader = ({ profile }: { profile: Profile }) => {
  return (
    <header className='top-0 right-0 left-0 z-50 fixed bg-black shadow-sm border-gray-300 border-b'>
      <div className='mx-auto px-4 max-w-7xl container'>
        <div className='flex flex-wrap justify-between items-center py-4'>
          <div className='flex items-center space-x-4'>
            <h1 className='font-semibold text-white text-xl'>Dashboard</h1>
          </div>
          <div className='flex items-center gap-x-4'>
            <nav className='flex items-center space-x-3'>
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={40}
                height={40}
                className='rounded-full w-[40px] h-[40px]'
              />
              <div className='hidden md:flex flex-col'>
                <span className='text-gray-300 hover:text-white transition-colors'>
                  Welcome: {profile.name}
                </span>
                <span className='text-gray-300 hover:text-white transition-colors'>
                  {profile.email}
                </span>
              </div>
            </nav>
            <SignoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
