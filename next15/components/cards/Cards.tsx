import { Card } from "../ui/card";

import { cn } from "@/lib/utils";
import ColoredCard from "./ColoredCard.tsx";

interface CommonCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: CommonCardProps) => {
  return (
    <Card
      className={cn(
        "bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 border border-gray-100",
        className
      )}
    >
      {children}
    </Card>
  );
};

export { ColoredCard };
