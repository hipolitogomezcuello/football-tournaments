import {NextRequest, NextResponse} from 'next/server'
import {findCompetitionsOf} from "@/src/services/FootballService";
import Registration from "@/src/models/Registration";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('user-id')
    const competitions = await findCompetitionsOf(userId)
    return NextResponse.json(competitions)
  } catch (error) {
    return NextResponse.error()
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('user-id')
    const { competitionId } = await request.json()
    const registration = await Registration.create({
      userId,
      competitionId
    })
    return NextResponse.json({
      registration
    })
  } catch (error) {
    return NextResponse.error()
  }
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url)
  try {
    const userId = request.headers.get('user-id')
    const competitionId = url.searchParams.get('competition-id');
    await Registration.destroy({
      where: {
        userId,
        competitionId
      }
    })
    return NextResponse.json({
      message: 'ok'
    })
  } catch (error) {
    return NextResponse.error()
  }
}
