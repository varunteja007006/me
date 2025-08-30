import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export const CoolButton = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        `cursor-pointer transition-all px-6 py-2 rounded-lg bg-primary/80 text-primary-foreground shadow-xs border-primary
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`,
        className
      )}
      {...props}
    />
  );
};
