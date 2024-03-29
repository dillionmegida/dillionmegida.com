import React from "react"

const Styles = {} as any

type Props = {
  name: string
  cover: string
  about: string
  link: string
}

const Template = ({ name, cover, about, link }: Props) => {
  return (
    <div className={Styles.Project}>
      <div className={Styles.Image}>
        <img src={cover} alt="Project preview" />
      </div>
      <div className={Styles.Details}>
        <span className={Styles.Name}>{name}</span>
        <p className={Styles.About}>{about}</p>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          View
        </a>
      </div>
    </div>
  )
}

export default Template
