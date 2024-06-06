"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import * as ReactSelect from "@radix-ui/react-select"
import { twMerge } from "tailwind-merge"

export const Root: React.FunctionComponent<ReactSelect.SelectProps> = (props) => (
  <ReactSelect.Root {...props} />
)

export const Portal: React.FunctionComponent<ReactSelect.SelectPortalProps> = (props) => (
  <ReactSelect.Portal {...props} />
)

export const Group = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Group>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Group>
>((props, ref) => <ReactSelect.Group ref={ref} {...props} />)

export const Value = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Value>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Value>
>((props, ref) => <ReactSelect.Value ref={ref} {...props} />)

export const Viewport = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Viewport>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Viewport>
>((props, ref) => (
  <ReactSelect.Viewport
    className="min-w-[var(--radix-select-trigger-width)] h-[var(--radix-select-trigger-height)] p-1"
    ref={ref}
    {...props}
  />
))

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Trigger>
>(({ children, className, ...props }, ref) => (
  <ReactSelect.Trigger
    className={twMerge(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    ref={ref}
    {...props}
  >
    <React.Fragment>{children}</React.Fragment>
    <ReactSelect.Icon asChild>
      <ReactIcons.CaretSortIcon className="h-4 w-4 opacity-50" />
    </ReactSelect.Icon>
  </ReactSelect.Trigger>
))

export const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof ReactSelect.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ReactSelect.ScrollUpButton
    className={twMerge("flex cursor-default items-center justify-center py-1", className)}
    ref={ref}
    {...props}
  >
    <ReactIcons.ChevronUpIcon />
  </ReactSelect.ScrollUpButton>
))

export const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof ReactSelect.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ReactSelect.ScrollDownButton
    className={twMerge("flex cursor-default items-center justify-center py-1", className)}
    ref={ref}
    {...props}
  >
    <ReactIcons.ChevronDownIcon />
  </ReactSelect.ScrollDownButton>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Content>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Content>
>(({ position = "popper", collisionPadding = 8, className, ...props }, ref) => (
  <ReactSelect.Content
    className={twMerge(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-background text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    )}
    ref={ref}
    position={position}
    collisionPadding={collisionPadding}
    {...props}
  />
))

export const Label = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Label>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Label>
>(({ className, ...props }, ref) => (
  <ReactSelect.Label
    className={twMerge("px-2 py-1.5 text-sm font-semibold", className)}
    ref={ref}
    {...props}
  />
))

export const Item = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Item>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Item>
>(({ className, ...props }, ref) => (
  <ReactSelect.Item
    className={twMerge(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-focus focus:text-focus-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <ReactSelect.ItemIndicator
      className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
      ref={ref}
      {...props}
    >
      <ReactIcons.CheckIcon className="h-4 w-4" />
    </ReactSelect.ItemIndicator>
    <ReactSelect.ItemText ref={ref} {...props} />
  </ReactSelect.Item>
))

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Separator>
>(({ className, ...props }, ref) => (
  <ReactSelect.Separator
    className={twMerge("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
))
