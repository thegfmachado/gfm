"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const handleOnClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <Button variant="outline" size="icon" onClick={handleOnClick}>
        <span className="text-xl dark:hidden">🌞</span>
        <span className="text-xl hidden dark:block">🌜</span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
