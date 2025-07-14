import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface ICustomCard {
  children: React.ReactNode
  title: string
  description: string | undefined
}
const CustomCard = ({
  children,
  title,
  description = undefined
}: ICustomCard) => {
  return (
    <Card className='bg-white border-black w-full max-w-md'>
      <CardHeader className='space-y-1 text-center'>
        <CardTitle className='font-bold text-black text-2xl'>{title}</CardTitle>
        <CardDescription className='text-gray-800'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default CustomCard
