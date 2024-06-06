import * as React from "react"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge("grid border shadow bg-card text-card-foreground rounded-xl gap-6 p-6")}
      ref={ref}
      {...props}
    />
  )
)

export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={twMerge("space-y-1.5", className)} ref={ref} {...props} />
  )
)

export const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={twMerge("font-semibold leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
))

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={twMerge("text-sm text-muted-foreground", className)} ref={ref} {...props} />
))

export const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} />
)

export const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} />
)
