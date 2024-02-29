import React from 'react'
import "../CSS/Home.css"
import Explore from './Explore'
import Create from './Create'
function Home() {
  return (
    <div className='home-body'>
        <Create/>
        <Explore/>
    </div>
  )
}

export default Home