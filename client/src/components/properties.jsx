import React, { useState, useEffect } from 'react'
import { properties } from './data'
import PropertyCard from './propertyCard'
import { FaArrowRight } from 'react-icons/fa6'

const Properties = () => {

    useEffect(() => {
        console.log(properties)
    })

  return (
    <div className='bg-gray-100 pb-6'>
        <div className='w-4/5 mx-auto'>
            <h1 className='text-start text-2xl md:text-4xl font-semibold pt-16'>Explore Our Properties</h1>
            <p className='text-start text-lg text-gray-700'>Most viewed and saved in the last 24 hours</p>
            <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-center'>
                { properties.map((property) => {
                    return (
                        <div key={property.id}>
                            <PropertyCard property={property} />
                        </div>
                    )
                })}
            </div>
            <div className='my-8 justify-center flex'>
                <button className='flex items-center gap-2 px-4 py-3 border-2 border-blue-800 rounded-lg text-blue-800 text-lg'>
                    See more <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Properties