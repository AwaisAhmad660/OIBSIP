import React from 'react'
import comp1 from "../assets/col1.svg"
import comp2 from "../assets/col2.svg";
import comp3 from "../assets/col3.svg";
import comp4 from "../assets/col4.svg";
import comp5 from "../assets/col5.png";
import comp6 from "../assets/col6.svg";
import comp7 from "../assets/col7.png";
import comp8 from "../assets/col8.svg";

const Collabration = () => {
  return (
    <>
      <div className='mx-auto text-center border-top my-5 pt-5'>
        <p  className='fs-3 fw-bolder'> I'm proud to have collaborated with some awesome companies:</p>
      </div>
      <div className="row">
        <div className="col">
          <img src={comp1} alt="" />
        </div>
        <div className="col">
          <img src={comp2} alt="" />
        </div>
        <div className="col">
          <img src={comp3} alt="" />
        </div>
        <div className="col">
          <img src={comp4} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={comp5} alt="" className="pngImage" />
        </div>
        <div className="col">
          <img src={comp6} alt="" />
        </div>
        <div className="col">
          <img src={comp7} alt="" className="pngImage" />
        </div>
        <div className="col">
          <img src={comp8} alt="" />
        </div>
      </div>
    </>
  );
}

export default Collabration;