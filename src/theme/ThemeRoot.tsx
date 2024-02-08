import {ThemeProvider, createTheme} from '@mui/material'
import {useMemo} from 'react'

export function ThemeRoot({children} : React.PropsWithChildren) {

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily       : 'Noto Sans JP',
      fontWeightRegular: 500,
      fontWeightMedium : 600,
      fontWeightBold   : 700
    }
  }), [])

  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}