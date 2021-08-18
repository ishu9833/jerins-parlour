import React from 'react';
import './TestimonialData.css'
const TestimonialData = ({review}) => {
    const {name, comment, title, img} = review;
    return (
            <>
            <div className="slider">
                <div className="signle_box">
                    
                       <div className="container">
                       <div className="row">
                            <div className="col-md-4 img_area">
                            <img src={img} alt="" />
                            </div>
                            {/* <div className="col-md-1"></div> */}
                            <div className="col-md-8 text_area">
                                <h6 className="name">{name}</h6>
                                <p className="title">{title}</p>
                            </div>
                        </div>
                       </div>
                       <br />
                        <p className="comment">{comment}</p>
                    </div>
                </div>
            
            </>
        
    );
};

export default TestimonialData;