import React from 'react'
import './Counter.css'

const Counter = ({icon, number, title}) => {
  return (
    <div className='counter flex flex-col items-center'>
        <i className={`fa fa-${icon} text-[2.8rem] ${icon}`}/>
        <span className='number-counter text-[3rem] font-bold text-primary-letter-color'>{number}</span>
        <span className='text-secondary-letter-color'>{title}</span>
    </div>
  );
};

export default Counter