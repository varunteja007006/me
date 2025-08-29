"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import contactData from "@/app/_components/home/data/contactData";
import { useCopyToClipboard } from "usehooks-ts";

export default function ContactIcons({
  className,
}: Readonly<{ className?: string }>) {
  const [copiedText, copy] = useCopyToClipboard();

  function handleCopy(text: string) {
    copy(text);
    toast(`Copied to your clipboard: ${text}`);
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      {contactData.map((item) => {
        return (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Button
                size={"icon"}
                variant={"outline"}
                className={cn(
                  "rounded-full ring-1 shadow",
                  className
                )}
                onClick={() => handleCopy(item.contact_value)}
                aria-label={item.contact_value}
              >
                <item.contact_icon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{item.contact_value}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
