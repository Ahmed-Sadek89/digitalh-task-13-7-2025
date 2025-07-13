import { DashboardHeader } from '@/components/layout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}

export default layout
