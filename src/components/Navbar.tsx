import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 800px)'
  })

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className=' w-full flex flex-row p-6 text-black bg-slate-100 fixed items-center top-0'>
      <div>
        <div className='flex flex-col'>
      <div className="text-lime-900 z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:text-5xl lg:flex pb-3">
    Welling Kennels
    </div>
    <div>English Springer Spannels</div>
    </div>
  
      </div>
     {isMobile?
     <div className='ml-auto'  onClick={openModal}
     >MENU</div>
    :
    <div className='ml-auto flex flex-row gap-5'>
   {/* <div>Puppies</div>
   <div>About</div> */}
    <Link className="transition-colors duration-300  hover:text-gray-500" href="/puppies">PUPPIES</Link>
    <Link className="transition-colors duration-300  hover:text-gray-500" href="/contact">CONTACT</Link>


    </div>
    }
          {modalIsOpen && <MobileMenu closeModal={closeModal}/>}

    </div>
  )
}

export default Navbar