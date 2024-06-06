"use client"

import * as React from "react"
import * as ReactForm from "@radix-ui/react-form"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactForm.Root>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Root>
>(({ className, ...props }, ref) => (
  <ReactForm.Root className={twMerge("grid gap-6", className)} ref={ref} {...props} />
))

export const Field = React.forwardRef<
  React.ElementRef<typeof ReactForm.Field>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Field>
>(({ className, ...props }, ref) => (
  <ReactForm.Field className={twMerge("space-y-2", className)} ref={ref} {...props} />
))

export const Label = React.forwardRef<
  React.ElementRef<typeof ReactForm.Label>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Label>
>(({ className, ...props }, ref) => (
  <ReactForm.Label
    className={twMerge(
      "text-sm data-[valid=true]:text-normal data-[invalid=true]:text-destructive",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Message = React.forwardRef<
  React.ElementRef<typeof ReactForm.Message>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Message>
>(({ className, ...props }, ref) => (
  <ReactForm.Message
    className={twMerge("text-sm font-medium text-destructive", className)}
    ref={ref}
    {...props}
  />
))

export const Control = React.forwardRef<
  React.ElementRef<typeof ReactForm.Control>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Control>
>((props, ref) => <ReactForm.Control ref={ref} {...props} />)

export const Submit = React.forwardRef<
  React.ElementRef<typeof ReactForm.Submit>,
  React.ComponentPropsWithoutRef<typeof ReactForm.Submit>
>((props, ref) => <ReactForm.Submit ref={ref} {...props} />)

export const ValidityState: React.FunctionComponent<ReactForm.FormValidityStateProps> = ({
  children,
  ...props
}) => <ReactForm.ValidityState {...props}>{children}</ReactForm.ValidityState>

export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge("flex flex-col space-y-2 text-center", className)}
      ref={ref}
      {...props}
    />
  )
)

export const Title = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      className={twMerge("text-2xl font-semibold tracking-tight", className)}
      ref={ref}
      {...props}
    />
  )
)

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={twMerge("text-sm text-muted-foreground", className)} ref={ref} {...props} />
))

export const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={twMerge("grid gap-6", className)} ref={ref} {...props} />
  )
)

export const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge("px-8 text-center text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  )
)

export const FieldHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={twMerge("flex justify-between items-center", className)} ref={ref} {...props} />
  )
)

export const FieldFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={twMerge("text-xs text-muted-foreground", className)} ref={ref} {...props} />
  )
)
