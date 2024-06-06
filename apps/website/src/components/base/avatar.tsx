"use client"

import * as React from "react"
import * as ReactAvatar from "@radix-ui/react-avatar"
import { twMerge } from "tailwind-merge";

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Root>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Root
    className={twMerge("w-10 h-10 flex overflow-hidden rounded-full", className)}
    ref={ref}
    {...props}
  />
))

export const Image = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Image>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Image
    className={twMerge("w-full h-full aspect-square", className)}
    ref={ref}
    {...props}
  />
))

export const Fallback = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Fallback
    className={twMerge("w-full h-full flex justify-center items-center bg-muted rounded-full", className)}
    ref={ref}
    {...props}
  />
))