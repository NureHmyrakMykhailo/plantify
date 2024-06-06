"use client"

import * as React from "react"
import * as ReactToolbar from "@radix-ui/react-toolbar"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

export const toggleVariants = tv({
  base: "inline-flex justify-center items-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-focus data-[state=on]:text-focus-foreground",
  variants: {
    variant: {
      default: "",
      outline: "border"
    },
    size: {
      sm: "h-8",
      md: "h-9",
      lg: "h-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
})

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.Root>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.Root>
>(({ className, ...props }, ref) => (
  <ReactToolbar.Root
    className={twMerge("flex justify-between items-center", className)}
    ref={ref}
    {...props}
  />
))

export const Button = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.Button>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.Button>
>((props, ref) => <ReactToolbar.Button ref={ref} {...props} />)

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.Separator>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.Separator>
>(({ className, ...props }, ref) => (
  <ReactToolbar.Separator className={twMerge("mx-2.5 border-l", className)} ref={ref} {...props} />
))

export const Link = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.Link>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.Link>
>(({ className, ...props }, ref) => (
  <ReactToolbar.Link className={twMerge("", className)} ref={ref} {...props} />
))

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.ToggleGroup>
>(({ className, ...props }, ref) => (
  <ReactToolbar.ToggleGroup
    className={twMerge("flex justify-center items-center gap-1", className)}
    ref={ref}
    {...props}
  />
))

export const ToggleItem = React.forwardRef<
  React.ElementRef<typeof ReactToolbar.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ReactToolbar.ToggleItem> & {
    variants: VariantProps<typeof toggleVariants>
  }
>(({ variants, className, ...props }, ref) => (
  <ReactToolbar.ToggleItem
    className={twMerge(toggleVariants(variants), className)}
    ref={ref}
    {...props}
  />
))

export const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    className={twMerge("text-xl font-bold leading-9", className)}
    ref={ref}
    {...props}
  />
))