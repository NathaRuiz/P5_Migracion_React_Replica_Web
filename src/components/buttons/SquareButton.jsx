import React from 'react'
import "./SquareButton.css"

const SquareButton = ({url="https://www.somosf5.org/", icon, title,bg_color="F7FAFD", color="6C6C6C"}) => {
    const openLink = (url) => {
        window.open(url, '_blank');
      };

      const colorStyle = {background: `#${bg_color}`, color:`#${color}` }
  return (
    <>
         <button style={colorStyle} className="square-button" onClick={() => openLink(url)}>
            <i class={icon} aria-hidden="true"></i>
            {title}
        </button>
    </>
  )
}

export default SquareButton