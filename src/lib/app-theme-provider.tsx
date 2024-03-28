"use client"

import {ThemeProviderProps} from "next-themes/dist/types"
import {ThemeProvider} from "next-themes"




export function AppThemeProvider({children, ...props}: ThemeProviderProps) {


  return (

    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>

  )
}



