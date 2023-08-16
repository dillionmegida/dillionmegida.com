import React, { ReactNode } from "react"
import Link from "./Icon/Link"
import YouTube from "./Icon/YouTube"
import styled from "styled-components"

const LinkStyle = styled.a`
  transition: background 300ms;
  color: yellow;
  padding: 0 6px;
  margin: 0 6px;
  height: 30px;
  background: var(--midMainColor1);
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  position: relative;
  top: 3px;

  &:hover {
    background: linear-gradient(#f0de14, #65fcb0);
    color: black;
  }
`

type Icon = "youtube" | "link"

type Props = {
  link: string
  children: React.ReactNode
  className?: string
  icon?: Icon
  newTab?: boolean
}

const iconMap: { [x in Icon]: ReactNode } = {
  link: <Link />,
  youtube: <YouTube />,
}

export function NewTabLink({
  link,
  children,
  className,
  icon = "link",
}: Props) {
  return (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

// export function AnchorLink({
//   link,
//   children,
//   className,
//   icon = "link",
//   newTab = false,
// }: Props) {
//   const newTabAttr = newTab
//     ? { target: "_blank", rel: "noopener noreferrer" }
//     : {}

//   const attr = { className, href: link, ...newTabAttr }

//   return (
//     <LinkStyle {...attr}>
//       {iconMap[icon]}
//       {children}
//     </LinkStyle>
//   )
// }

export default function AnchorLink({
  link,
  children,
  className,
  icon,
  newTab = false,
}: Props) {
  const newTabAttr = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  const attr = { className, href: link, ...newTabAttr }

  return (
    <LinkStyle {...attr}>
      {icon && iconMap[icon]}
      {children}
    </LinkStyle>
  )
}
