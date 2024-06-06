"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import * as ReactCheckbox from "@radix-ui/react-checkbox"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof ReactCheckbox.Root>
>(({ className, ...props }, ref) => (
  <ReactCheckbox.Root
    className={twMerge(
      "peer h-4 w-4 shrink-0 rounded-sm border border-solid shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-solid data-[state=checked]:text-solid-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Indicator = React.forwardRef<
  React.ElementRef<typeof ReactCheckbox.Indicator>,
  React.ComponentPropsWithoutRef<typeof ReactCheckbox.Indicator>
>(({ className, ...props }, ref) => (
  <ReactCheckbox.Indicator
    className={twMerge("flex justify-center items-center text-current", className)}
    ref={ref}
    {...props}
  >
    <ReactIcons.CheckIcon className="w-4 h-4" />
  </ReactCheckbox.Indicator>
))
