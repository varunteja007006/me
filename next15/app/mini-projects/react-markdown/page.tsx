"use client"

import ReactMarkdown from "react-markdown"

export default function Page() {
  const input = `### There are many variations of passages of Lorem Ipsum available

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
`

  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown>{input}</ReactMarkdown>
    </article>
  )
}
