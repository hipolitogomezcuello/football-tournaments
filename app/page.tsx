"use client"
import {Button} from "@mui/material";

export default function Home() {
  return (
    <main>
      <Button variant={"contained"} onClick={() => alert('hoho, you clicked me!')}>Hola</Button>
    </main>
  )
}
