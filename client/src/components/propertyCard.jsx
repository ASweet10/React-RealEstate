import React, {useEffect} from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

const PropertyCard = (p) => {

    useEffect(() => {
        console.log(p)
    })

  return (
    <div className='w-[350px] bg-white border-2 border-gray-200 overflow-hidden group rounded-lg cursor-pointer hover:shadow-xl'>
        <div className='relative'>
            <img src={p.property.imageUrl} alt={p.property.propertyName} className='w-full object-fit'/> 
            {/* group-hover:scale-110 transition-all duration-300 */}
                <div className='mx-3 my-3 flex flex-col'>
                    <h1 className='text-2xl font-bold'>
                        {p.property.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </h1>
                    <div className='flex gap-1 items-center'>
                        <p className='font-bold'>{p.property.bedrooms} <span className='font-normal text-sm'>bds</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-bold'>{p.property.bathrooms} <span className='font-normal text-sm'>ba</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-bold'>{p.property.size} <span className='font-normal text-sm'>sqft</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p>{p.property.listingActive ? 'Active' : 'Sold'}</p>
                    </div>
                    <p className='text-lg'>{p.property.address}</p>
                    <h2 className='text-sm text-gray-500'>{p.property.realtor}</h2>
                </div>
        </div>
    </div>
  )
}

export default PropertyCard