import React from "react"

type Props = {
  link: string
  children: React.ReactNode
  className?: string
}

export function NewTabLink({ link, children, className }: Props) {
  return (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} ↗
    </a>
  )
}

export function AnchorLink({ link, children, className }: Props) {
  return (
    <a className={className} href={link}>
      {children}
    </a>
  )
}
