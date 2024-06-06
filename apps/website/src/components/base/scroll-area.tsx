"use client"

import * as React from "react"
import * as ReactScrollArea from "@radix-ui/react-scroll-area"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Root>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Root>
>(({ className, ...props }, ref) => (
  <ReactScrollArea.Root
    ref={ref}
    className={twMerge("relative overflow-hidden", className)}
    {...props}
  />
))

export const Viewport = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Viewport>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Viewport>
>(({ className, ...props }, ref) => (
  <ReactScrollArea.Viewport
    className={twMerge("h-full w-full rounded-[inherit]", className)}
    ref={ref}
    {...props}
  />
))

export const Corner = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Corner>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Corner>
>((props, ref) => <ReactScrollArea.Corner ref={ref} {...props} />)

export const Scrollbar = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Scrollbar>
>(({ className, orientation, ...props }, ref) => (
  <ReactScrollArea.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  />
))

export const Thumb = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Thumb>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Thumb>
>(({ className, ...props }, ref) => (
  <ReactScrollArea.Thumb
    className={twMerge("relative flex-1 rounded-full bg-border", className)}
    ref={ref}
    {...props}
  />
))
