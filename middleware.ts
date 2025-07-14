import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware (request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET

  const token = await getToken({ req: request, secret })

  const isAuth = !!token
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')
  const isHome = request.nextUrl.pathname === '/'

  if (!isAuth && isDashboard) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isAuth && isHome) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
