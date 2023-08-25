import {NextRequest, NextResponse} from 'next/server'
import {findCompetitions} from "@/src/services/FootballService";

export async function GET(request: NextRequest) {
  try {
    const competitions = await findCompetitions()
    return NextResponse.json(competitions)
  } catch (error) {
    return NextResponse.error()
  }
}
