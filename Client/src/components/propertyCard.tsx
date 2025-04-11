import React, { useState, useEffect, ReactHTMLElement } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'
import { BsHeart, BsHeartFill } from "react-icons/bs"

const PropertyCard = (p:any) => {
    const [ favorite, setFavorite ] = useState(false)

    function handleHeartClick() {
        setFavorite(!favorite)
    }

  return (
    <div className='w-[350px] bg-white border-2 border-gray-200 overflow-hidden group rounded-lg cursor-pointer hover:shadow-xl'>
        <div className='relative'>
            <img src={p.property.imageUrl} alt={p.property.propertyName} className='w-full object-fit'/> 
            {/* group-hover:scale-110 transition-all duration-300 */}
            <div className="flex gap-4">
                <div className='mx-3 my-2 flex flex-col w-4/5'>
                    <h1 className='text-xl font-semibold'>
                        {p.property.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </h1>
                    <div className='flex gap-1 items-center'>
                        <p className='font-semibold'>{p.property.bedrooms} <span className='font-normal text-sm'>bds</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-semibold'>{p.property.bathrooms} <span className='font-normal text-sm'>ba</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-semibold'>{p.property.size} <span className='font-normal text-sm'>sqft</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p>{p.property.listingActive ? 'Active' : 'Sold'}</p>
                    </div>
                    <p className='text-sm'>{p.property.address}</p>
                    <h2 className='text-sm text-gray-500'>{p.property.realtor}</h2>
                </div>

                <div className='justify-center mt-2 w-1/5 flex'>
                    {
                        favorite ? (
                            <BsHeartFill 
                                className="text-2xl text-blue-950"
                                onClick={() => handleHeartClick()}
                            />
                        ) : (
                            <BsHeart 
                                className="text-2xl text-gray-600"
                                onClick={() => handleHeartClick()}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard