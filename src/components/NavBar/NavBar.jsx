import React from 'react'
import Styles from "./style.module.css"
import _ from "../../utils/_.module.css"
import { BrandLogo } from '../../assets/icons'

const NavBar = () => {
  return (
    <div className={`${_["body-padding"]} ${_["container-style"]} ${Styles.nav_cont}`}>
        <div className={Styles.logo_cont}>
            <BrandLogo/>
        </div>
    </div>
  )
}

export default NavBar