"use client"

import CssBaseline from "@mui/material/CssBaseline";
import {NextAppDirEmotionCacheProvider} from "@/theme/EmotionCache";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";

const themeOptions: ThemeOptions = {

}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({ children }: {children: React.ReactNode}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}