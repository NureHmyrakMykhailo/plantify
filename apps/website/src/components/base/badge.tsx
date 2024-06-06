import { tv, VariantProps } from "tailwind-variants"
import { forwardRef, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const badgeVariants = tv({
  base: "inline-flex justify-center items-center whitespace-nowrap select-none rounded-sm text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-2.5 py-0.5",
  variants: {
    type: {
      solid: "bg-solid text-solid-foreground",
      light: "bg-light text-light-foreground",
      muted: "bg-muted text-muted-foreground",
      error: "bg-error text-error-foreground",
      outline: "bg-transparent text-foreground border"
    }
  }
})

export interface IBadge extends HTMLAttributes<HTMLSpanElement> {
  variants: VariantProps<typeof badgeVariants>
}

export const Badge = forwardRef<HTMLSpanElement, IBadge>(
  ({ variants, className, ...props }, ref) => {
    return (
      <span className={twMerge(badgeVariants(variants), className)} ref={ref} {...props} />
    )
  }
)
