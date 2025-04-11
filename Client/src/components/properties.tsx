import { properties } from './data'
import PropertyCard from './propertyCard'
import { FaArrowRight } from 'react-icons/fa6'

const Properties = () => {

  return (
    <div className='bg-gray-100 pb-6 w-full'>
        <h1 className='text-center md:text-start md:ml-52 text-3xl md:text-4xl font-semibold pt-16'>Explore Our Properties</h1>
        <p className='text-center md:text-start md:ml-52 text-lg text-gray-700'>Most viewed and saved in the last 24 hours</p>
        <div className='mt-8 md:mt-10 md:mx-20 flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center'>
            { properties.map((property) => {
                return (
                    <div key={property.id}>
                        <PropertyCard property={property} />
                    </div>
                )
            })}
        </div>
        <div className='my-8 justify-center flex'>
            <button className='flex items-center gap-2 px-4 py-3 border-2 border-blue-800 rounded-lg text-blue-800 text-lg hover:bg-blue-800 hover:text-white'>
                See more <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Properties