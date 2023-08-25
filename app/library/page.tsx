"use client"
import {Button} from "@mui/material";
import HeaderNavigationBar from "@/src/components/HeaderNavigatorBar";
import {useEffect, useState} from "react";
import CompetitionInfo from "@/src/components/CompetitionInfo";
import {Competition} from "@/src/types/Football";

export default function Home() {

  const [competitions, setCompetitions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/library')
      const data = await response.json()
      setCompetitions(data)
    }
    fetchData()
  }, []);

  const handleRemove = (competitionId: number) => {
    setCompetitions(competitions.filter((competition: Competition) => competition.id !== competitionId))
  }

  return (
    <main>
      <HeaderNavigationBar/>
      {competitions.length > 0 ? (
        competitions.map((competition: Competition) => (
          <div key={competition.id}>
            <CompetitionInfo competition={competition} type={"remove"} onRemove={handleRemove}/>
          </div>
        ))
      ) : null}
    </main>
  )
}
