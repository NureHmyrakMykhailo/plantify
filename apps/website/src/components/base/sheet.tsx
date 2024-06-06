"use client"

import * as React from "react"
import * as ReactSheet from "@radix-ui/react-dialog"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

export const sheetVariants = tv({
  base: [
    "fixed z-50 gap-4 bg-background p-6 shadow-lg",
    "transition ease-in-out duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out"
  ],
  variants: {
    side: {
      top: [
        "inset-x-0 top-0 w-full h-auto border-b",
        "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"
      ],
      right: [
        "inset-y-0 right-0 h-full w-3/4 border-l",
        "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      ],
      bottom: [
        "inset-x-0 bottom-0 w-full h-auto border-t",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
      ],
      left: [
        "inset-y-0 left-0 h-full w-3/4 border-r",
        "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm"
      ]
    }
  }
})

export interface ISheetContent extends React.ComponentPropsWithoutRef<typeof ReactSheet.Content> {
  variants: VariantProps<typeof sheetVariants>
}

export const Root: React.FunctionComponent<ReactSheet.DialogProps> = ({ children, ...props }) => (
  <ReactSheet.Root {...props}>{children}</ReactSheet.Root>
)

export const Portal: React.FunctionComponent<ReactSheet.DialogPortalProps> = (props) => (
  <ReactSheet.Portal {...props} />
)

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactSheet.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactSheet.Trigger>
>((props, ref) => <ReactSheet.Trigger ref={ref} {...props} />)

export const Close = React.forwardRef<
  React.ElementRef<typeof ReactSheet.Close>,
  React.ComponentPropsWithoutRef<typeof ReactSheet.Close>
>((props, ref) => <ReactSheet.Close ref={ref} {...props} />)

export const Overlay = React.forwardRef<
  React.ElementRef<typeof ReactSheet.Overlay>,
  React.ComponentPropsWithoutRef<typeof ReactSheet.Overlay>
>(({ className, ...props }, ref) => (
  <ReactSheet.Overlay
    className={twMerge(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Content = React.forwardRef<React.ElementRef<typeof ReactSheet.Content>, ISheetContent>(
  ({ variants, className, ...props }, ref) => (
    <ReactSheet.Content
      className={twMerge(sheetVariants(variants), className)}
      ref={ref}
      {...props}
    />
  )
)

export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={twMerge("flex flex-col space-y-2 text-center sm:text-left", className)}
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
  React.ElementRef<typeof ReactSheet.Title>,
  React.ComponentPropsWithoutRef<typeof ReactSheet.Title>
>(({ className, ...props }, ref) => (
  <ReactSheet.Title
    className={twMerge("text-lg font-semibold text-foreground", className)}
    ref={ref}
    {...props}
  />
))

export const Description = React.forwardRef<
  React.ElementRef<typeof ReactSheet.Description>,
  React.ComponentPropsWithoutRef<typeof ReactSheet.Description>
>(({ className, ...props }, ref) => (
  <ReactSheet.Description
    className={twMerge("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
))
