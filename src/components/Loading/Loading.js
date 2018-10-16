import React from 'react';
import './Loading.css'

const Loading = () => {
  return(
    <div className="loading">
      <div className='wrapper'>
      <div className='loading-wrapper'>
      <div className="circle"></div>
      <div className="dot"></div>
      <div className="dot-two"></div>
    </div>
    <i className="fab fa-jedi-order icon"></i>
    </div>
    </div>
  )
}

export default Loading