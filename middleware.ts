import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware (request: NextRequest) {
  const response = NextResponse.next()
  // const token = request.cookies.get("digitalH_token").value;
  const token = true

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if (token && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
