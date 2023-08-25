import {NextRequest, NextResponse} from 'next/server'
import {findMatchesOf} from "@/src/services/FootballService";

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  try {
    const competitionCode = url.searchParams.get('competition-code');
    if (!competitionCode) {
      throw new Error('No competition code received')
    }
    const matches = await findMatchesOf(competitionCode)
    return NextResponse.json(matches)
  } catch (error) {
    return NextResponse.error()
  }
}