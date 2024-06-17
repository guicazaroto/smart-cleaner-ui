import type { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (token && request.nextUrl.pathname.startsWith('/entrar')) {
    return Response.redirect(new URL('/profile', request.url))
  }
 
  if (!token && request.nextUrl.pathname.startsWith('/profile')) {
    return Response.redirect(new URL('/entrar', request.url))
  }
}
 


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
