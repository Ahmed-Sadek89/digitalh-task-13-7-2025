import axios from '@/lib/axios'

export async function PUT (
  request: Request,
  { params }: { params: Promise<{ product_id: string }> }
) {
  const { product_id } = await params
  try {
    const body = await request.json()
    const res = await axios.put(`/products/${product_id}`, body)
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



export async function DELETE (
  request: Request,
  { params }: { params: Promise<{ product_id: string }> }
) {
  const { product_id } = await params
  try {
    const res = await axios.delete(`/products/${product_id}`)
    return new Response(res.data, { status: res.status })
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