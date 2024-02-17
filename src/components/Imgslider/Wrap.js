import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './wrap.css'

const Wrap = ({ children }) => {
  return (
    <div className='wrap'>
      { children }
    </div>
  )
}

export default Wrap;
