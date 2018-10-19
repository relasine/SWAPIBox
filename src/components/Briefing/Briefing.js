import React from 'react'

import './Briefing.css'

const Briefing = ( {crawl, title, id}) => {
  return (
    <section>
      <h2>Situation Briefing</h2>
      <p className='crawl-text'>{crawl}</p>
      <p className='smol-text'>Briefing Title: <span>{title}</span></p>
      <p className='smol-text'>Galaxy Date: <span>{id}</span></p>
    </section>
  )
}

export default Briefing;