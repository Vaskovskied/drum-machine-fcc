import React from 'react'
import cl from './Display.module.css'
function Display({status}) {
  return (
    <div className={cl.display} id='display'>{status}</div>
  )
}

export default Display