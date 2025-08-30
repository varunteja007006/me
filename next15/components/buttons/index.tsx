import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

export const CoolButton = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        `bg-primary/80 text-primary-foreground border-primary cursor-pointer rounded-lg border-b-[4px] px-6 py-2 shadow-xs transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:brightness-90`,
        className
      )}
      {...props}
    />
  )
}
