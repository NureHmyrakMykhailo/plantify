"use client"

import * as React from "react"
import * as ReactDialog from "@radix-ui/react-dialog"
import { twMerge } from "tailwind-merge"

export const Root: React.FunctionComponent<ReactDialog.DialogProps> = (props) => (
  <ReactDialog.Root {...props} />
)

export const Portal: React.FunctionComponent<ReactDialog.DialogPortalProps> = (props) => (
  <ReactDialog.Portal {...props} />
)

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Trigger>
>((props, ref) => <ReactDialog.Trigger ref={ref} {...props} />)

export const Close = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Close>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Close>
>((props, ref) => <ReactDialog.Close ref={ref} {...props} />)

export const Overlay = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Overlay>
>(({ className, ...props }, ref) => (
  <ReactDialog.Overlay
    className={twMerge(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Content>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Content>
>(({ className, ...props }, ref) => (
  <ReactDialog.Content
    className={twMerge(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge("flex flex-col space-y-1.5 text-center sm:text-left", className)}
      ref={ref}
      {...props}
    />
  )
)

export const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

export const Title = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Title>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Title>
>(({ className, ...props }, ref) => (
  <ReactDialog.Title
    className={twMerge("text-lg font-semibold leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
))

export const Description = React.forwardRef<
  React.ElementRef<typeof ReactDialog.Description>,
  React.ComponentPropsWithoutRef<typeof ReactDialog.Description>
>(({ className, ...props }, ref) => (
  <ReactDialog.Description
    className={twMerge("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
))
