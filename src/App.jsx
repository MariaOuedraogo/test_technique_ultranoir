import React from 'react';
import { Hero } from './components/Hero';
import { Discover } from './components/Discover';
import { Reveal } from './components/Reveal';



function App() {
  return (
    <React.Fragment>
      <Hero>
      </Hero>
      <Reveal />
      <Discover />
    </React.Fragment>
  )
}
export default App
