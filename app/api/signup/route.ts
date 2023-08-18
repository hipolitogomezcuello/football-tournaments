import {NextRequest, NextResponse} from 'next/server'
import User from "@/src/models/User";

export async function POST(request: NextRequest, response: NextResponse) {
  const { email, password } = await request.json()
  try {
    const data = await User.create({
      email,
      password,
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.error()
  }
}