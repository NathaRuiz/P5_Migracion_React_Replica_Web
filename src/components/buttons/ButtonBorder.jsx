import React from 'react'
import './ButtonBorder.css'

const ButtonBorder = ({url, title,color}) => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  const colorStyle = {border: `2px solid #${color}`, color: `#${color}` }
  return (
    <>
        <button style={colorStyle} className="button-border " onClick={() => openLink(url)}>
            {title}
        </button>
    </>
  )
}

export default ButtonBorder