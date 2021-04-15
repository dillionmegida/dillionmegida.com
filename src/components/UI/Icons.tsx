import React, { Fragment } from "react"

type Props = {
  faClass: string
}

const Icon = ({ faClass }: Props) => (
  <Fragment>
    <i className={faClass}></i>
  </Fragment>
)
const Share = () => <Icon faClass="fa fa-share" />

export { Share }
