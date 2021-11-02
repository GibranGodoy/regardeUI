import React from "react";
import "./comments.scss";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    if (props.movieId) {
      const URL = `https://regardapi.herokuapp.com/v1/comments/ofmovie/${props.movieId}`;
      const getComments = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setReviews(data);
      };
      getComments();
    }
  }, [props.movieId]);

  return (
    <section className="comments">
      <h5>Comentarios</h5>
      <div className="commentsList">
        {reviews.map((review, index) => (
          <SingleComment key={index} review={review} />
        ))}
        {/* {
                    review.map((e, i) =>
                        <Review review= e />
                    )
                } */}
      </div>
    </section>
  );
}

export default Comments;
