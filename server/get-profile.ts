import { authOptions } from '@/lib/auth'
import axios from '@/lib/axios'
import { Profile } from '@/type'
import { getServerSession } from 'next-auth'

export async function getProfile (): Promise<Profile | undefined> {
  const session = await getServerSession(authOptions)
  const res = await axios.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${session?.user.access_token}`
    }
  })
  return res.data
}
