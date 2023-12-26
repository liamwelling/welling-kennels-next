import React, {useEffect, useState} from 'react'
// import { BrowserRouter as Router, Link, Link as RouterLink } from 'react-router-dom'
import everRentLogo from '../assets/everrent_logo.svg'
import { useMediaQuery } from 'react-responsive'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'


function MobileMenu({closeModal}:any) {

  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setOpened(true)
  })
  return (
    <div className='w-[100vw] h-screen fixed bg-white text-black top-0 bottom-0 left-0 right-0 overflow-hidden '>
   
    <div className='text-black flex flex-row'>
     
        <div className='ml-auto pt-7 pr-9'>
        {/* <CloseIcon      id="basic-button"
        //  aria-controls={open ? 'basic-menu' : undefined}
        //  aria-haspopup="true"
        //  aria-expanded={open ? 'true' : undefined}
         onClick={closeModal}
         style={{cursor: 'pointer' }}/> */}
         <div   onClick={closeModal}
         style={{cursor: 'pointer' }}>X</div>
         </div>
      </div>
      <Link href='/'>
        <div className='flex text-3xl ml-32 font-bold'>    Bean Sidhe Springers
</div>
        </Link>
    <div className={`flex flex-col mx-auto my-[20vh] text-center transition-opacity ease-in duration-700 ${opened? 'opacity-100' : 'opacity-0'}`}>

    <Link href="/puppies" className={`text-4xl font-calibreReg `}>Puppies</Link>
    <Link href="/about" className={`text-4xl font-calibreReg `}>About</Link>
    {/* <Link href="/contact" className={`text-4xl font-calibreReg `}>Photos</Link> */}

    {/* <Link to='/about' component={RouterLink} >
      <div className={`text-4xl font-calibreReg `}>ABOUT</div>
     </Link>

     <Link to='/services' component={RouterLink} >
      <div className='text-4xl font-calibreReg'>SERVICES</div>
     </Link>
     <Link to='/venues' component={RouterLink} >
      <div className='text-4xl font-calibreReg'>VENUES</div>
     </Link>
     <Link to='/inquire' component={RouterLink} >
      <div className='text-4xl font-calibreReg'>CONTACT</div>
     </Link> */}



</div>
    </div>
  )
}

export default MobileMenu