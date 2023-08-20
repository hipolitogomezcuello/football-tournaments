import {NextRequest, NextResponse} from 'next/server'
import User from "@/src/models/User";
import {createToken} from "@/app/utils/jwt";
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  try {
    const data = await User.login(
      email,
      password
    )
    const jwt: string = createToken(data.id)
    cookies().set('jwt', jwt, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.error()
  }
}