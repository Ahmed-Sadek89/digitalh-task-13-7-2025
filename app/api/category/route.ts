import axios from '@/lib/axios'

export async function GET () {
  const res = await axios.get('/categories')
  return new Response(JSON.stringify(res.data), {
    status: 200
  })
}
