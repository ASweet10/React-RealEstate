import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='py-16'>
      <div className='w-4/5 mx-auto'>
      <h1 className='text-start text-2xl md:text-3xl font-semibold pt-16'>Client Testimonials</h1>
          <div className='mt-14'>
            <ReviewSlider />
          </div>
      </div>
    </div>
  )
}

export default Reviews