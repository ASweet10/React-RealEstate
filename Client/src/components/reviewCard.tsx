import { FaQuoteRight, FaStar } from "react-icons/fa"

interface Review {
  id: number;
  name: string;
  profession: string;
  image: string;
  stars: number;
  review: string;
}

interface ReviewProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className='bg-gray-200 rounded-lg m-3 p-4 relative' key={review.id}>
        <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20' />
        <div className='mt-6 flex items-center'>
            {Array.from({ length: review.stars }, (_,index) => <FaStar className='w-4 h-4 text-yellow-600' key={index}/>)}
        </div>
        <p className='mt-6 text-base text-gray-600 font-medium'>{review.review}</p>
        <div className='w-full h-[1.2px] bg-gray-600 opacity-10 my-4'></div>
        <div className='flex items-center gap-4'>
            <img src={review.image} alt={review.name} width={45} height={45} className="rounded-full object-cover max-w-full h-auto" />
            <div> 
                <h1 className='font-bold text-gray-800'>{review.name}</h1>
                <p className='text-sm text-gray-500'>{review.profession}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard