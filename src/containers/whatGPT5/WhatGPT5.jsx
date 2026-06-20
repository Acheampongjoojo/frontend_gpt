import React from 'react'
import './WhatGPT5.css'
import Features from '../features/Features'

const WhatGPT5 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3' >
      <div className="gpt3__whatgpt3-feature">
        <Features />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  )
}

export default WhatGPT5
