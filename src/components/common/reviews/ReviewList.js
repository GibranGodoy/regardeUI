import React from 'react'
import Review from './Review';
import './reviewList.scss'
import { reviews } from "../../../data";

export default function ReviewList() {
    return (
        <section className='reviews'>
            <h5>¿Qué piensan los usuarios de las películas que han visto?</h5>
            <div className='list-review'>
                {
                    reviews.map((review) =>
                        <Review {...review} />
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
