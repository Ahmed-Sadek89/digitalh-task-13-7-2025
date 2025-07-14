import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CustomTableSearchInput = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    if (inputValue.trim()) {
      router.push(
        `/dashboard?product=${encodeURIComponent(
          inputValue.trim().toLowerCase().replace(/ /g, '-')
        )}`
      )
    } else {
      router.push(`/dashboard`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }
  return (
    <div className='relative max-w-sm'>
      <Input
        placeholder='Filter Titles...'
        value={inputValue}
        onChange={event => {
          const value = event.target.value
          setInputValue(value)
        }}
        onKeyDown={handleKeyDown}
        className='pr-10'
      />
      <Search
        className='top-2.5 right-2 absolute w-5 h-5 text-muted-foreground cursor-pointer'
        onClick={handleSearch}
      />
    </div>
  )
}

export default CustomTableSearchInput
