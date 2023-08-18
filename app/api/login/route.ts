import {NextRequest, NextResponse} from 'next/server'
import User from "@/src/models/User";

export async function POST(request: NextRequest) {
  const requestJson = await request.nextUrl.searchParams
  const data = {
    message: 'Hello World'
  }
  await User.create({
    email: 'gonzalez',
    password: '1234pass'
  })
  return NextResponse.json(data)
}