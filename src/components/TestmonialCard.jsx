import React from "react";

const TestmonialCard = ({ testimony }) => {
  return (
    <div className="col-md-4">
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={testimony.userImageUrl} alt="" />
        </div>
        <div className="testimonial-content">
          <p>{testimony.message}</p>
          <div className="testimonial-meta"> {testimony.userName}</div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard;
