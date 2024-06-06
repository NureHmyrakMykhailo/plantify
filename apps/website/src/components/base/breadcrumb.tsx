"use client"

import * as React from "react"
import * as ReactIcons from "@radix-ui/react-icons"
import { twMerge } from "tailwind-merge"

export const Root = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => <nav aria-label="breadcrumb" ref={ref} {...props} />
)

export const List = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => (
    <ol
      className={twMerge(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

export const Item = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={twMerge("inline-flex items-center gap-1.5", className)} {...props} />
  )
)

export const Link = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        className={twMerge("transition-colors hover:text-foreground", className)}
        ref={ref}
        {...props}
      />
    )
  }
)

export const Page = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={twMerge("font-normal text-foreground", className)}
      ref={ref}
      {...props}
    />
  )
)

export const Separator = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      role="presentation"
      aria-hidden="true"
      className={twMerge("[&>svg]:size-3.5", className)}
      ref={ref}
      {...props}
    >
      <ReactIcons.ChevronRightIcon />
    </li>
  )
)

export const Ellipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      role="presentation"
      aria-hidden="true"
      className={twMerge("flex h-9 w-9 items-center justify-center", className)}
      ref={ref}
      {...props}
    >
      <ReactIcons.DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
)
