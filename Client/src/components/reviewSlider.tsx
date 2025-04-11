'use client'
import React, { useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import ReviewCard from './reviewCard'
import "react-multi-carousel/lib/styles.css"
import { userReviews } from './data'

const ReviewSlider = () => {

  const [ reviewData, setReviewData ] = useState([])

  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  useEffect(() => {
    fetch("http://localhost:8081/reviews")
    .then(res => res.json())
    .then(data => setReviewData(data))
    .catch(err => console.log(err))
  })
  
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={8000}
      infinite
      responsive={responsiveCarousel}
    >
      { reviewData.map((review) => {
        return (
          <ReviewCard review={review} key={review.id}/>
        )
      })}
    </Carousel>
  )
}

export default ReviewSlider