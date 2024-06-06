"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import * as ReactNavigationMenu from "@radix-ui/react-navigation-menu"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Root>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Root
    className={twMerge(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const List = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.List>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.List>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.List
    className={twMerge(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Item = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Item>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Item>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Item className={twMerge("", className)} ref={ref} {...props} />
))

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <ReactNavigationMenu.Trigger
    className={twMerge(
      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-focus hover:text-focus-foreground focus:bg-focus focus:text-focus-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      className
    )}
    ref={ref}
    {...props}
  >
    <React.Fragment>{children}</React.Fragment>
    <ReactIcons.ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </ReactNavigationMenu.Trigger>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Content
    className={twMerge(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Link = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Link>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Link>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Link
    className={twMerge(
      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-focus hover:text-focus-foreground focus:bg-focus focus:text-focus-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-focus/50 data-[state=open]:bg-focus/50",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Viewport = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center">
    <ReactNavigationMenu.Viewport
      className={twMerge(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-background text-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))

export const Indicator = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Indicator>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Indicator>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Indicator
    className={twMerge(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </ReactNavigationMenu.Indicator>
))
