import React from 'react'
import Styles from "./style.module.css"
import _ from "../../utils/_.module.css"

const Button = ({children, size, onClick}) => {
  return (
    <button className={`${_["container-style"]} ${_["flex-center"]} ${Styles[size]} ${Styles.btn}`} onClick={onClick}>{children}</button>
  )
}

export default Button