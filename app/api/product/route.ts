import axios from '@/lib/axios'

export async function POST (request: Request) {
  try {
    const body = await request.json()
    const res = await axios.post('/products', body)

    return new Response(JSON.stringify(res.data), { status: res.status })
  } catch (error: any) {
    return new Response(
      JSON.stringify(
        error.response.data || { message: 'Something went wrong' }
      ),
      {
        status: error.response.data.statusCode
      }
    )
  }
}
