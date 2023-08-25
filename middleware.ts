import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  try {
    if (request.nextUrl.pathname.includes('login') || request.nextUrl.pathname.includes('signup')) {
      return NextResponse.next()
    }
    const token = request.cookies.get('jwt')?.value

    if (!token) {
      url.pathname = '/login'
      return NextResponse.rewrite(url)
    }

    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))

    if (!payload || !payload.id) {
      url.pathname = '/login'
      return NextResponse.rewrite(url)
    }

    const newHeaders = new Headers(request.headers)
    newHeaders.set('user-id', payload.id as string)
    return NextResponse.next({
      request: {
        ...request,
        headers: newHeaders
      }
    })
  } catch (error) {
    return NextResponse.error()
  }
}

export const config = {
  matcher: [
    '/((?!_next|api/auth).*)(.+)'
  ],
}