import { Card } from "../ui/card"

import { cn } from "@/lib/utils"
import ColoredCard from "./ColoredCard.tsx"

interface CommonCardProps {
  children: React.ReactNode
  className?: string
}

export const GlassCard = ({ children, className }: CommonCardProps) => {
  return (
    <Card
      className={cn(
        "bg-gray-0 bg-opacity-100 rounded-md border border-gray-100 bg-clip-padding backdrop-blur-md backdrop-filter",
        className
      )}
    >
      {children}
    </Card>
  )
}

export { ColoredCard }
