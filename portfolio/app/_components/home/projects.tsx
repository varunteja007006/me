import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { FaGithub } from "react-icons/fa6"
import { GrDeploy } from "react-icons/gr"

import projectData, { COMPLETED } from "./data/projects"

const ProjectLink = ({
  URL,
  type,
}: {
  URL: string
  type: "github" | "website"
}) => {
  if (type === "website") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={"icon"} variant={"outline"} asChild>
            <a href={URL}>
              <GrDeploy className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Go to deployed website</TooltipContent>
      </Tooltip>
    )
  }

  if (type === "github") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size={"icon"} variant={"outline"} asChild>
            <a href={URL}>
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Go to github repository</TooltipContent>
      </Tooltip>
    )
  }
  return null
}

export default function Projects() {
  return (
    <section id="certifications" className="space-y-4">
      <h3 className="text-xl font-semibold">Projects</h3>

      <div className="grid grid-cols-1 gap-5">
        {projectData.map((item, index) => {
          if (!item.toShow) {
            return null
          }
          return (
            <Card key={item.id} className="relative">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="col-span-2">
                  <CardHeader className="pb-3">
                    <CardTitle>
                      <span className="flex w-full flex-wrap items-center justify-between gap-2">
                        {item.project_title}
                        <Badge
                          variant={
                            item.projectStatus === COMPLETED
                              ? "default"
                              : "outline"
                          }
                        >
                          {item.projectStatus}
                        </Badge>
                      </span>
                    </CardTitle>
                    <CardDescription className="py-2">
                      {item.project_subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap items-center justify-start gap-2">
                      {item.project_badges.map(item => {
                        return (
                          <Badge variant={"outline"} key={item}>
                            {item}
                          </Badge>
                        )
                      })}
                    </div>
                  </CardHeader>
                  <CardContent className="leading-loose">
                    {item.project_description.map((item, index) => {
                      return <p key={index}>{item}</p>
                    })}
                  </CardContent>
                  <CardFooter className="gap-5">
                    {item.project_github && (
                      <ProjectLink type="github" URL={item.project_github} />
                    )}
                    {item.project_link && (
                      <ProjectLink type="website" URL={item.project_link} />
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
