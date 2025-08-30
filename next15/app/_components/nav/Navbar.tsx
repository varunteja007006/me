"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { SiGithub } from "react-icons/si";

import { ModeToggle } from "@/components/toggle-theme";
import { miniProjects, stuffIBuilt } from "./data/nav";
import Link from "next/link";
import Icon from "./Icon";

export function Navbar() {
  return (
    <div className="w-full flex-row hidden md:flex items-center justify-between gap-10 px-4 py-2">
      <Icon />
      <NavigationMenu className="flex-1" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/docs"
                  title="Introduction"
                  description="Re-usable components built using Radix UI and Tailwind CSS."
                />
                <ListItem
                  href="/docs/installation"
                  title="Installation"
                  description="How to install dependencies and structure your app."
                />
                <ListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                  description="Styles for headings, paragraphs, lists...etc"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {miniProjects.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    description={component.description}
                    githubLink={component.githubLink}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Stuff I built</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  {stuffIBuilt.map((component) => (
                    <NavigationMenuLink asChild key={component.id}>
                      <Link href={component.href}>
                        <div className="font-medium">{component.title}</div>
                        <div className="text-muted-foreground">
                          {component.description}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

function ListItem({
  title,
  description,
  href,
  githubLink,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  description: string;
  githubLink?: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <div className="flex flex-col gap-2">
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {description}
            </p>
          </Link>
          {githubLink && (
            <Link href={githubLink} aria-label="GitHub Link" target="_blank">
              <SiGithub />
            </Link>
          )}
        </div>
      </NavigationMenuLink>
    </li>
  );
}
