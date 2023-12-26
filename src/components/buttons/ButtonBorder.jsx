import React from 'react'
import './ButtonBorder.css'

const ButtonBorder = ({link, title,color}) => {
  const colorStyle = {border: `2px solid #${color}`, color: `#${color}` }
  return (
    <>
        <button style={colorStyle} className="button-border z-20">
          <a target="_blank" href={link}>
            {title}
          </a>
        </button>
    </>
  )
}

export default ButtonBorder