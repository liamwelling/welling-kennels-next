import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 800px)'
  })
  return (
    <div className=' w-full flex flex-row p-6 text-black bg-gray-200 fixed items-center top-0'>
      <div>
      <div className="text-emerald-700 z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:text-3xl lg:flex pb-3">
    Welling Kennels
    </div>
  
      </div>
     {isMobile?
     <div className='ml-auto'>MENU</div>
    :
    <div className='ml-auto flex flex-row gap-5'>
   {/* <div>Puppies</div>
   <div>About</div> */}
    <Link className="transition-colors duration-300  hover:text-gray-500" href="/puppies">Puppies</Link>
    <Link className="transition-colors duration-300  hover:text-gray-500" href="/contact">CONTACT</Link>


    </div>
    }
    
    </div>
  )
}

export default Navbar