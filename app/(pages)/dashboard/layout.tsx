import { DashboardHeader } from '@/components/layout'
import { getProfile } from '@/server/get-profile'
import { Profile } from '@/type'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await getProfile()

  return (
    <>
      <DashboardHeader profile={profile as Profile} />
      {children}
    </>
  )
}

export default layout
