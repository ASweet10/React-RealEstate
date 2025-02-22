import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbox = () => {
  return (
    <div className='w-5/6 md:w-[50%] mx-auto bg-white h-[4rem] sm:h-[5rem] flex px-4 sm:px-8
        flex-col justify-center rounded-full'
    >
        <div className='flex items-center justify-between h-full'>
            <input className='sm:flex-[0.8] h-[60%] block outline-none px-2 text-base md:text-xl'
              type="text" placeholder="Address, City, or Zipcode"
            />
            {/*            
              <div className='flex items-center flex-[0.2] ml-16 space-x-6 border-2 border-green-200'>

              <div className='w-12 h-12 flex items-center hover:bg-red-800 transition-all duration-150
                cursor-pointer justify-center text-gray-500 rounded-full'
              >
                <FaSearch />
              </div>

            </div>
            */}
            <FaSearch className="text-gray-500 text-xl md:text-2xl" />
        </div>
    </div>
  )
}

export default Searchbox