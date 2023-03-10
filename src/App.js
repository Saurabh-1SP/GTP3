import React from 'react'
import './App.css'
import { Articles, Brand, Cta , Feature, Navbar} from './components'
import {Blog, Features, Footer, Header, Possibility, WhatGPT } from './container'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT/>
      <Features  />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App