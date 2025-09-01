import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/toggle-theme"

export default function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="flex lg:hidden"
          variant={"outline"}
          size={"icon"}
          aria-label="Menu"
        >
          <GiHamburgerMenu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start gap-2 p-4">
          <ScrollArea className="mb-5 h-full w-full flex-1">
            <ul className="grid gap-3 p-3 pl-0 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {/* <ListItem
                key={"React"}
                title={"React"}
                href={`/react`}
              >{`Learn about react hooks`}</ListItem>
              <ListItem
                key={"Problems"}
                title={"Problems"}
                href="/react-problems"
              >{`React related problems to solve`}</ListItem> */}
              {/* {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))} */}
            </ul>
          </ScrollArea>
          <div className="flex w-full flex-row justify-end">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
          className
        )}
        {...props}
      >
        <div className="text-sm leading-none font-medium">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"
