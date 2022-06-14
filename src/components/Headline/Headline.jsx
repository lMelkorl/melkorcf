import React from "react";
import "./Headline.css";

export default function Headline() {
  return (
    <div className="section-headline">
      <section class="headline">
        <div className="headline-content">
          <h2>Responsive Navigation</h2>
          <p>Using CSS grid and flexbox to easily build navbars!</p>
        </div>
      </section>
      {/* <div className="svgs">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#871F78"
            fill-opacity="1"
            d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}
