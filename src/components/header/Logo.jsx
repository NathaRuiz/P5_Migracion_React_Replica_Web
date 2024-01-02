import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.svg'


const Logo = () => {
  return (
    <div className='pl-3'>
        <Link to="/">
            <img className='w-32' src={LogoImg} alt="logo" />
        </Link>
    </div>
  )
}

export default Logo