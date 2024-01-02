import Image from 'next/image'
import React from 'react'
interface PuppyProps {
   name: string
   photoURL: string
   sex: string
   sold: boolean 
  }

const PuppyContainer= ({name, photoURL, sex, sold}:PuppyProps) => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <Image width={300} height={300} src={photoURL} alt={name} className='rounded w-2/4 h-auto lg:w-1/2 lg:h-3/4'/>
      <div className='capitalize'>Name: {name}</div>
      <div className='capitalize'>Gender: {sex}</div>
      {sold ? <div className='text-red'>Sold</div> : <div className='text-green-800'>Available</div>}
    </div>
  )
}

export default PuppyContainer