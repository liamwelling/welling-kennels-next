import Navbar from '@/components/Navbar'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <img src='./dog1.jpg' alt='dog1' className=' h-1/4 object-cover' />
    </div>
  )
}

export default Homepage