"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import * as ReactToast from "@radix-ui/react-toast"
import { tv, VariantProps } from "tailwind-variants"
import { twMerge } from "tailwind-merge"

export const toastVariants = tv({
  base: "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  variants: {
    type: {
      light: "border bg-background text-foreground",
      error: "group error border-error bg-error text-error-foreground"
    }
  }
})

export interface IToastRoot extends React.ComponentPropsWithoutRef<typeof ReactToast.Root> {
  variants: VariantProps<typeof toastVariants>
}

export const Provider: React.FunctionComponent<ReactToast.ToastProviderProps> = ({
  children,
  ...props
}) => <ReactToast.Provider {...props}>{children}</ReactToast.Provider>

export const Root = React.forwardRef<React.ElementRef<typeof ReactToast.Root>, IToastRoot>(
  ({ variants, className, ...props }, ref) => (
    <ReactToast.Root className={twMerge(toastVariants(variants), className)} ref={ref} {...props} />
  )
)

export const Title = React.forwardRef<
  React.ElementRef<typeof ReactToast.Title>,
  React.ComponentPropsWithoutRef<typeof ReactToast.Title>
>(({ className, ...props }, ref) => (
  <ReactToast.Title
    className={twMerge("text-sm font-semibold [&+div]:text-xs", className)}
    ref={ref}
    {...props}
  />
))

export const Description = React.forwardRef<
  React.ElementRef<typeof ReactToast.Description>,
  React.ComponentPropsWithoutRef<typeof ReactToast.Description>
>(({ className, ...props }, ref) => (
  <ReactToast.Description
    className={twMerge("text-sm opacity-90", className)}
    ref={ref}
    {...props}
  />
))

export const Action = React.forwardRef<
  React.ElementRef<typeof ReactToast.Action>,
  React.ComponentPropsWithoutRef<typeof ReactToast.Action>
>(({ className, ...props }, ref) => (
  <ReactToast.Action
    className={twMerge(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-light focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.error]:border-muted/40 group-[.error]:hover:border-error/30 group-[.error]:hover:bg-error group-[.error]:hover:text-error-foreground group-[.error]:focus:ring-error",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Close = React.forwardRef<
  React.ElementRef<typeof ReactToast.Close>,
  React.ComponentPropsWithoutRef<typeof ReactToast.Close>
>(({ className, ...props }, ref) => (
  <ReactToast.Close
    className={twMerge(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.error]:text-red-300 group-[.error]:hover:text-red-50 group-[.error]:focus:ring-red-400 group-[.error]:focus:ring-offset-red-600",
      className
    )}
    ref={ref}
    toast-close=""
    {...props}
  >
    <ReactIcons.Cross2Icon className="w-4 h-4" />
  </ReactToast.Close>
))

export const Viewport = React.forwardRef<
  React.ElementRef<typeof ReactToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof ReactToast.Viewport>
>(({ className, ...props }, ref) => (
  <ReactToast.Viewport
    className={twMerge(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    ref={ref}
    {...props}
  />
))