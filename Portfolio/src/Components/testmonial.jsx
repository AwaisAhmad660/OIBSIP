import React from 'react'
import avatar from "../assets/avtar.svg";

const Testmonial = () => {
  return (
    <>
      <div>
        <p className="fw-bolder fs-2 text-center">Testimonials</p>
        <p className="fw-bolder fs-5 text-center">
          People I've worked with have said some nice things...
        </p>
      </div>

      <div>
        <div className="text-center m-5 ">
          <img src={avatar} alt="" className="avatarImages" />
        </div>

        <div>
          <p className="text-center fs-5 introDetails mx-auto fw-bold">
            “Matt was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <div className="inroduction ">
            <p className="fw-bolder fs-2 text-center">Pascal Tremblay</p>
            <p className="fw-bolder fs-5 text-center">
              Creative Lead, Good Kind
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonial;