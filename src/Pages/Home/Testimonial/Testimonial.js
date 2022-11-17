import React from "react";

const Testimonial = ({ review }) => {
    console.log(review)
  return (
    <div>
      <p className="mb-8">{review.review}</p>
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.image} alt="" />
          </div>
          <div className="pl-5">
            <h2 className="text-xl">{review.name}</h2>
            <p>{review.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
