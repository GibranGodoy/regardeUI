import React from 'react'
import Review from './Review';
import './reviewList.scss'

export default function ReviewList() {
    const [reviews, setReviews] = React.useState([]);

      React.useEffect(() => {
        const URL = "https://regardapi.herokuapp.com/v1/comments/last";
        const getComments = async () => {
          const response = await fetch(URL);
          const data = await response.json();
          setReviews(data);
        };
        getComments();
      }, []);

    return (
        <section className='reviews'>
            <h5>¿Qué piensan los usuarios de las películas que han visto?</h5> 
            <div className='list-review'>
                {
                    reviews.map((review, index) =>
                        <Review key={index} review={review} />
                    )
                }
                {/* {
                    review.map((e, i) =>
                        <Review review= e />
                    )
                } */}
            </div>
        </section>
    )
}
