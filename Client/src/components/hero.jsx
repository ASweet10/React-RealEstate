import React from 'react'
import Searchbox from './searchbox'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-slate-800 
        overflow-hidden bg-[url('./images/house.jpg')] relative bg-cover bg-center"
    >
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
            <h1 className='text-white text-opacity-80 text-center text-lg uppercase font-medium'>
                The best way to
            </h1>
            <h1 className='text-white font-semibold text-3xl md:text-6xl mt-3'>
                Find your Dream Home
            </h1>
            <p className='mt-4 text-center text-base md:text-lg text-gray-200'>
                Search from more than 300,000 houses, apartments, and condos.
            </p>

            <div className='mt-12 w-full'>
                <Searchbox />
            </div>
        </div>
    </div>
  )
}

export default Hero