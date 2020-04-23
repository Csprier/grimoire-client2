import React from 'react';

function LandingPageSlider() {
  return(
    <div className="slider-container">
      <ul className="slider">{props.children}</ul>
    </div>
  );
};

export default LandingPageSlider;