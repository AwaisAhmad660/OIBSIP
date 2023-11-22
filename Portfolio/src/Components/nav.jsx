import React from "react";
import avatar from "../assets/avtar.svg";
import logo from "../assets/logo.svg"
import heroImage from "../assets/hero.svg";

const Nav = () => {
  return (
    <>
      <div className=" d-flex justify-content-between ">
        <div className="p-3 logo">
          <img src={logo} alt="logo" className="colorpurple" />
          
        </div>
        <div className=" d-flex gap-5">
          <p className="p-3 fw-bold  colorpurple">Mentorship</p>
          <p className="rounded-pill colorpurple text-center fw-bold  navbtn">
            Say Hello
          </p>
        </div>
      </div>
      <div className="heroSection">
        <div className="heroContent">
          <p className="text-center fw-bolder  heroTitle ">
            Designer, Frontend Developer & Mentor
          </p>
          <p className="text-center fs-2">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
        <div className="text-center m-5 ">
          <img src={avatar} alt="" className="avatarImages" />
        </div>

        <div className="heroImage text-center">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Nav;
