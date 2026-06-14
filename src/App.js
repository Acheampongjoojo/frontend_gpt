import React from 'react'

import { Footer, Blog, Possibility, Features, Header, WhatGPT5 } from './containers'
import {Brand, Cta, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        
      </div>
      <Brand />
      <WhatGPT5 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App
