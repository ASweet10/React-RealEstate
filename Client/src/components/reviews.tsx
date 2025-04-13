import ReviewSlider from './reviewSlider'

const Reviews = () => {
  return (
    <div className='py-12 md:py-16'>
      <div className='w-5/6 mx-auto'>
      <h1 className='text-start text-3xl md:text-4xl font-semibold pt-8 md:pt-16 md:pl-12'>Client Testimonials</h1>
          <div className='mt-8 md:mt-16'>
            <ReviewSlider />
          </div>
      </div>
    </div>
  )
}

export default Reviews