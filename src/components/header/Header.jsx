import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-primary-background w-full pt-5 pb-3 pl-12 pr-12'>
        {/* <Logo/> */}
        <Navbar/>
    </div>
  )
}

export default Header