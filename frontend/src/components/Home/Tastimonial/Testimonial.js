import React, { useState } from "react";
import TestimonialData from "./TestimonialData";
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    id: 1,
    name: "Nash Patrik",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/bPzWgL7/Ellipse-90.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis distinctio debitis reprehenderit iusto natus.",
  },
  {
    id: 2,
    name: "Miriam Barron",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/1bwz4x0/Ellipse-91.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis distinctio debitis reprehenderit iusto natus.",
  },
  {
    id: 3,
    name: "Bari Malone",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/Wx3SDDT/Ellipse-92.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis distinctio debitis reprehenderit iusto natus.",
  },
  {
    id: 4,
    name: "Bari Malone",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/Wx3SDDT/Ellipse-92.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis distinctio debitis reprehenderit iusto natus.",
  },
  {
    id: 5,
    name: "Bari Malone",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/Wx3SDDT/Ellipse-92.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis distinctio debitis reprehenderit iusto natus.",
  },
];

const Testimonial = () => {
  const settings = {
    // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };
  const newData = data.slice(0, 5);
  const [review, setReview] = useState(newData);
  // console.log(review);
  return (
    <div className="container slider_container">
      <h3 className="text-center mt-5 mb-5 heading">Testimonials</h3>
      <Slider  {...settings}>
          {
            review.map(rv=> <TestimonialData review={rv} key={rv.id} />)
          }
        </Slider>
    </div>
  );
};

export default Testimonial;
