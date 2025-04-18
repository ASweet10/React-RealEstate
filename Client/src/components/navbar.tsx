"use client"
import { useState, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { CgClose } from 'react-icons/cg'
import { PiWarehouse } from "react-icons/pi"

const navLinks = [
    { id: 1, url: '#', title: "Buy" },
    { id: 2, url: '#', title: "Rent" },
    { id: 3, url: '#', title: "Sell" },
    { id: 4, url: '#', title: "About" },
]

const Navbar = () => {
    const [ mobileNavOpen, setMobileNavOpen ] = useState(false)
    const [ desktopNavVisible, setDesktopNavVisible ] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setDesktopNavVisible(true)
            if (window.scrollY < 90) setDesktopNavVisible(false)
        }

        window.addEventListener("scroll", handler)
        return () => {
            window.removeEventListener("scroll", handler)
        }
    })

  return (
    <div>
        {/* Desktop */}
        <div className={`fixed ${desktopNavVisible ? 'bg-blue-950' : ""} h-[10vh] z-[1000] w-full transition-all duration-200`}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[85%] mx-auto'>
                <div className='flex items-center justify-between gap-8'>
                    <a href="/" className='flex items-center space-x-2 hover:cursor-pointer'>
                        <PiWarehouse className='text-3xl text-white' />
                        <h1 className='text-white font-bold text-lg hover:cursor-pointer'>
                            RentPro
                        </h1>
                    </a>
                </div>

                <div className='lg:flex items-center space-x-12 text-white hidden'>
                    { navLinks.map((link) => {
                        return (
                            <a key={link.id} href={link.url}>
                                <p className='font-medium text-white hover:text-blue-200 hover:cursor-pointer'>
                                    {link.title}
                                </p>
                            </a>
                        )
                    })}
                </div>

                <div className='flex items-center space-x-4'>
                    <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-blue-200 transition-all duration-200'>
                        <FaUserCircle className='w-5 h-5' />
                        <p className='font-bold text-base'>Login / Register</p>
                    </div>
                </div>

                <HiBars3BottomRight className='text-white w-8 h-8 hover:cursor-pointer lg:hidden' 
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                />
            </div>

        </div>
        
        {/* Mobile */}
        <div className={`transform transition-transform duration-300 ease-in-out ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='fixed top-0 right-0 bg-black opacity-70 w-full h-screen overflow-x-hidden duration-500 z-10'></div>
            <div className='transform translate-x-[0%] transition-all duration-400 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-red-800 text-white space-y-6 z-[10000]'>
                { navLinks.map((link) => {
                return (
                    <a key={link.id} href={link.url}>
                        <p className='text-[20px] ml-12 pb-1 w-fit underline sm:text-[30px] text-white hover:text-yellow-300'>
                            {link.title}
                        </p>
                    </a>
                )
                })}
                
                <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white1'
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                />
            </div>
        </div>

    </div>
  )
}

export default Navbar