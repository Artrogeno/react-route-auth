import React, { useContext } from 'react'
import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'

import './Hamburger.scss'

const Hamburger = () => {

  let { layout: { sidebar } } = useContext(LayoutPrivateContext)

  const isActive = (status) => {
    let classes = ['Hamburger']
    classes.push(status ? 'active' : '')
    return classes.join(' ')
  }

  return (
    <div className={isActive(sidebar)}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default Hamburger
