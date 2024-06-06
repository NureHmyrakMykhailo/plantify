"use client"

import * as React from "react"
import * as ReactTooltip from "@radix-ui/react-tooltip"
import {twMerge} from "tailwind-merge";

export const Provider: React.FunctionComponent<ReactTooltip.TooltipProviderProps> = ({ children, ...props }) => (
  <ReactTooltip.Provider {...props}>
    {children}
  </ReactTooltip.Provider>
)

export const Root: React.FunctionComponent<ReactTooltip.TooltipProps> = (props) => (
  <ReactTooltip.Root {...props} />
)

export const Portal: React.FunctionComponent<ReactTooltip.TooltipPortalProps> = (props) => (
  <ReactTooltip.Portal {...props} />
)

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactTooltip.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactTooltip.Trigger>
>((props, ref) => (
  <ReactTooltip.Trigger ref={ref} {...props} />
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof ReactTooltip.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ReactTooltip.Content
    className={twMerge(
      "z-50 overflow-hidden rounded-md bg-solid px-3 py-1.5 text-xs text-solid-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    sideOffset={sideOffset}
    ref={ref}
    {...props}
  />
))
