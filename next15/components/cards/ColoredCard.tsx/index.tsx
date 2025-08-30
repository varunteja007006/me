import "./index.css"

type Props = {
  title?: string
  description?: string
  href?: string
  children?: React.ReactNode
}

export default function ColoredCard({
  title,
  description,
  href = "#",
  children,
}: Props) {
  return (
    <div className="card">
      {children ? (
        children
      ) : (
        <a className="card1" href={href}>
          <p>{title}</p>
          <p className="small">{description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      )}
    </div>
  )
}
