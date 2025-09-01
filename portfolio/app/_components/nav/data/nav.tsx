import { generateId } from "@/lib/utils"

export const miniProjects: {
  id: string
  title: string
  href: string
  description: string
  githubLink: string
}[] = [
  {
    id: generateId(),
    title: "Block Note",
    description: "This is a simple implementation of block note",
    href: "/mini-projects/block-note",
    githubLink:
      "https://github.com/varunteja007006/me/tree/main/portfolio/app/mini-projects/block-note",
  },
]

export const stuffIBuilt: {
  id: string
  title: string
  description: string
  href: string
}[] = [
  {
    id: generateId(),
    title: "My Portfolio",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    href: "/stuff/my-portfolio",
  },
]
