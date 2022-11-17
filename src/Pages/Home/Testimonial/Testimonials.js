import React from "react";
import qoute from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviews = [
    {
      _id: "1",
      name: "Rukon",
      address:"Dhaka",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
    },
    {
      _id: "2",
      name: "Rukon",
      address:"Dhaka",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
    },
    {
      _id: "3",
      name: "Rukon",
      address:"Dhaka",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl">Testimonials</h3>
          <h3 className="text-3xl">What our patients says?</h3>
        </div>
        <div>
          <img src={qoute} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
        {
            reviews.map(review=><Testimonial 
            key={review._id} review={review}></Testimonial>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
