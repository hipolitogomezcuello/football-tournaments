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
      const response = await fetch('/api/competitions')
      const data = await response.json()
      setCompetitions(data)
    }
    fetchData()
  }, []);

  return (
    <main>
      <HeaderNavigationBar/>
      {competitions.length > 0 ? (
        competitions.map((competition: Competition) => (
          <div key={competition.id}>
            <CompetitionInfo competition={competition} type={"add"}/>
          </div>
        ))
      ) : null}
    </main>
  )
}
