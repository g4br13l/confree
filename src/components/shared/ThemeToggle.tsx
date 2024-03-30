"use client"

import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "next-themes";




export function ThemeToggle({showText}: {showText?: boolean}) {

  const { resolvedTheme, setTheme } = useTheme();

  const btnToggleClick = () => {
    (resolvedTheme === 'dark') ? setTheme('light') : setTheme('dark');
  }


  return (
    <div className="flex items-center gap-4 text-muted-foreground">

      <Button variant="ghost" size="icon" onClick={btnToggleClick}>

        <SunIcon className="h-[1.2rem] w-[1.2rem]
                 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>

        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem]
                  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>

      </Button>

      {showText && <span className="text-sm">Aparência</span>}


    </div>
  )

}