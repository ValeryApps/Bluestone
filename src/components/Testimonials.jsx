import React from "react";
import { testimonies } from "../data/services";
import TestmonialCard from "./TestmonialCard";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>
        <div className="row">
          {testimonies.map((testimony) => (
            <TestmonialCard testimony={testimony} key={testimony.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
