import { forwardRef, ButtonHTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { twMerge } from "tailwind-merge"

export const buttonVariants = tv({
  base: "inline-flex justify-center items-center whitespace-nowrap select-none rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    type: {
      solid: "bg-solid text-solid-foreground hover:bg-solid/90",
      light: "bg-light text-light-foreground hover:bg-light/80",
      ghost: "bg-transparent text-foreground hover:bg-focus hover:text-focus-foreground",
      outline: "bg-transparent text-foreground border hover:bg-light/80"
    },
    size: {
      sm: "h-8",
      md: "h-9",
      lg: "h-10"
    },
    icon: {
      false: "aspect-auto",
      true: "aspect-square"
    }
  },
  compoundVariants: [
    {
      size: "sm",
      icon: false,
      className: "px-3"
    },
    {
      size: "md",
      icon: false,
      className: "px-4"
    },
    {
      size: "lg",
      icon: false,
      className: "px-5"
    }
  ],
  defaultVariants: {
    icon: false
  }
})

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants: VariantProps<typeof buttonVariants>
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ variants, className, ...props }, ref) => {
    return <button className={twMerge(buttonVariants(variants), className)} ref={ref} {...props} />
  }
)
