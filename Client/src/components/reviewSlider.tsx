//'use client' needed for useEffect data fetching
import { userReviews as reviews } from './data'
import Carousel from 'react-multi-carousel'
import ReviewCard from './reviewCard'
import "react-multi-carousel/lib/styles.css"

interface Review {
  id: number;
  name: string;
  profession: string;
  image: string;
  stars: number;
  review: string;
}

interface ReviewProps {
  reviews: Review[];
}

const ReviewSlider: React.FC<ReviewProps> = ({ reviews: Review }) => {

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

  /*     Local MySQL data fetching
  //const [ reviewData, setReviewData ] = useState<Review[]>([])
  useEffect(() => {
    
    fetch("http://localhost:8081/reviews")
    .then(res => res.json())
    .then(data => setReviewData(data))
    .catch(err => console.log(err))
  })
  */
  
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={8000}
      infinite
      responsive={responsiveCarousel}
    >
      {/*
      { reviewData.map((review) => {
        return (
          <ReviewCard review={review} key={review.id}/>
        )
      })}
      */}

      { reviews.map((r) => (
        <ReviewCard review={r} />
      ))}
    </Carousel>
  )
}

export default ReviewSlider