import React from 'react'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='pl-3'>
        <Link to="/">
            <img className='w-32' src="../src/assets/images/logo.svg" alt="logo" />
        </Link>
    </div>
  )
}

export default Logo