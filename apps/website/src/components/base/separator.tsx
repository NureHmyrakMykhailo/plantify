"use client"

import * as React from "react"
import * as ReactSeparator from "@radix-ui/react-separator"
import { twMerge } from "tailwind-merge"

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactSeparator.Root>,
  React.ComponentPropsWithoutRef<typeof ReactSeparator.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <ReactSeparator.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={twMerge(
      orientation === "horizontal" ? "border-t w-full" : "border-l h-full",
      className
    )}
    {...props}
  />
))
