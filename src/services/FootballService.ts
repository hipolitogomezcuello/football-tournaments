import {Competition, CompetitionsResponse, Match} from "@/src/types/Football";
import cache from "@/src/services/CacheService";
import Registration from "@/src/models/Registration";

const URL = 'https://api.football-data.org/'

export async function findCompetitions(): Promise<Competition[]> {
  try {
    const cachedCompetitions: Competition[] | undefined = await cache.get('allCompetitions')
    if (cachedCompetitions) {
      return cachedCompetitions
    }
    const response = await fetch(`${URL}/v4/competitions`, {
      headers: {
        'X-Auth-Token': String(process.env.FOOTBALL_API_KEY || ''),
      },
    })
    const data: CompetitionsResponse = await response.json()
    cache.set('allCompetitions', data.competitions)
    return data.competitions
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function findCompetitionsOf(userId: string | null): Promise<Competition[]> {
  try {
    const registrations: Registration[] = await Registration.findAll({
      where: {
        userId,
      }
    })
    const allCompetitions: Competition[] = await findCompetitions()
    return allCompetitions.filter((competition) => {
      return registrations.find((registration) => +registration.competitionId === +competition.id)
    })
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function findMatchesOf(competitionCode: string): Promise<Match[]> {
  try {
    const cachedMatches: Match[] | undefined = await cache.get(`matches-${competitionCode}`)
    if (cachedMatches) {
      return cachedMatches
    }
    const response = await fetch(`${URL}/v4/competitions/${competitionCode}/matches`, {
      headers: {
        'X-Auth-Token': String(process.env.FOOTBALL_API_KEY || ''),
      },
    })
    const data: { matches: Match[] } = await response.json()
    cache.set(`matches-${competitionCode}`, data.matches)
    return data.matches
  } catch (error) {
    console.log(error)
    return []
  }
}
