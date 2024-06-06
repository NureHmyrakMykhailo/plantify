"use client"

import * as React from "react"
import * as ReactAlertDialog from "@radix-ui/react-alert-dialog"
import { twMerge } from "tailwind-merge"

export const Root: React.FunctionComponent<ReactAlertDialog.AlertDialogProps> = ({
  children,
  ...props
}) => <ReactAlertDialog.Root {...props}>{children}</ReactAlertDialog.Root>

export const Portal: React.FunctionComponent<ReactAlertDialog.AlertDialogPortalProps> = ({
  children,
  ...props
}) => <ReactAlertDialog.Portal {...props}>{children}</ReactAlertDialog.Portal>

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Trigger>
>(({ children, ...props }, ref) => (
  <ReactAlertDialog.Trigger ref={ref} {...props}>
    {children}
  </ReactAlertDialog.Trigger>
))

export const Overlay = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Overlay>
>(({ children, className, ...props }, ref) => (
  <ReactAlertDialog.Overlay
    className={twMerge(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </ReactAlertDialog.Overlay>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Content>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Content>
>(({ children, className, ...props }, ref) => (
  <ReactAlertDialog.Content
    className={twMerge(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </ReactAlertDialog.Content>
))

export const Title = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Title>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Title>
>(({ children, className, ...props }, ref) => (
  <ReactAlertDialog.Title
    className={twMerge("text-lg font-semibold", className)}
    ref={ref}
    {...props}
  >
    {children}
  </ReactAlertDialog.Title>
))

export const Description = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Description>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Description>
>(({ children, className, ...props }, ref) => (
  <ReactAlertDialog.Description
    className={twMerge("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  >
    {children}
  </ReactAlertDialog.Description>
))

export const Action = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Action>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Action>
>(({ children, ...props }, ref) => (
  <ReactAlertDialog.Action ref={ref} {...props}>
    {children}
  </ReactAlertDialog.Action>
))

export const Cancel = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Cancel>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Cancel>
>(({ children, ...props }, ref) => (
  <ReactAlertDialog.Cancel ref={ref} {...props}>
    {children}
  </ReactAlertDialog.Cancel>
))

export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge("flex flex-col space-y-2 text-center sm:text-left", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
)

export const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
)
