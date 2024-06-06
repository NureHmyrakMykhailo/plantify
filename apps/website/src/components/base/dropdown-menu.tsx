"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import * as ReactDropdownMenu from "@radix-ui/react-dropdown-menu"
import { twMerge } from "tailwind-merge"

export const Root: React.FunctionComponent<ReactDropdownMenu.DropdownMenuProps> = (props) => (
  <ReactDropdownMenu.Root {...props} />
)

export const Portal: React.FunctionComponent<ReactDropdownMenu.DropdownMenuPortalProps> = (
  props
) => <ReactDropdownMenu.Portal {...props} />

export const Sub: React.FunctionComponent<ReactDropdownMenu.DropdownMenuSubProps> = (props) => (
  <ReactDropdownMenu.Sub {...props} />
)

export const Group = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Group>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Group>
>((props, ref) => <ReactDropdownMenu.Group ref={ref} {...props} />)

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.RadioGroup>
>((props, ref) => <ReactDropdownMenu.RadioGroup ref={ref} {...props} />)

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Trigger>
>((props, ref) => <ReactDropdownMenu.Trigger ref={ref} {...props} />)

export const SubTrigger = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <ReactDropdownMenu.SubTrigger
    ref={ref}
    className={twMerge(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-focus data-[state=open]:bg-focus",
      className
    )}
    {...props}
  >
    <React.Fragment>{children}</React.Fragment>
    <ReactIcons.ChevronRightIcon className="ml-auto h-4 w-4" />
  </ReactDropdownMenu.SubTrigger>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Content>
>(({ sideOffset = 4, className, ...props }, ref) => (
  <ReactDropdownMenu.Content
    className={twMerge(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    sideOffset={sideOffset}
    ref={ref}
    {...props}
  />
))

export const SubContent = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.SubContent
    className={twMerge(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const Label = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Label>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.Label
    className={twMerge("px-2 py-1.5 text-sm font-semibold", className)}
    ref={ref}
    {...props}
  />
))

export const Item = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Item>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.Item
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-focus focus:text-focus-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.CheckboxItem>
>(({ checked, className, ...props }, ref) => (
  <ReactDropdownMenu.CheckboxItem
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-focus focus:text-focus-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    checked={checked}
    {...props}
  />
))

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.RadioItem>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.RadioItem
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))

export const ItemIndicator = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.ItemIndicator
    className={twMerge("absolute left-2 flex h-3.5 w-3.5 items-center justify-center", className)}
    ref={ref}
    {...props}
  />
))

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.Separator
    className={twMerge("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
))

export const Arrow = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Arrow>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Arrow>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.Arrow className={twMerge("bg-background", className)} ref={ref} {...props} />
))
