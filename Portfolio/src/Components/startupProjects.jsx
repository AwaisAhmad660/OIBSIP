import React from "react";
import basin from "../assets/s1.svg";
import shipable from "../assets/s2.svg";
import junkbox from "../assets/s3.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import msgicon from "../assets/msgicon.svg";


export const StartupProjects = () => {
  return (
    <>
      <div className="serviceContainer ">
        <div className="text-light mx-auto">
          <p className="fs-1 text-center fw-bold pt-5">My Startup Projects</p>
          <p className="fs-5 text-center mx-auto bio">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Eventually, I decided that it would be a fun challenge to
            try designing and building my own.
          </p>
        </div>
      </div>
      <div className="startups mx-auto">
        <div className="row m-3 startupcard ">
          <div className="col-4 border rounded p-5">
            <div>
              <img src={basin} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                A powerful, easy-to-configure form backend for designers and
                developers.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">usebasin.com</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={shipable} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Short, focused design and growth collabs for startup tech
                founders.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">shipable.io</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={junkbox} alt="" className="junkbox" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Intelligent API solution for automatic spam protection without
                the manual work.
              </p>
              <div className="fs-5">
                <img src={icon2} alt="" className="icons" />
                <a href="/">in development</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3 ">
          <div className="col-4 border rounded p-5">
            <div>
              <img src={basin} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                A powerful, easy-to-configure form backend for designers and
                developers.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">usebasin.com</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={shipable} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Short, focused design and growth collabs for startup tech
                founders.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">shipable.io</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={junkbox} alt="" className="junkbox" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Intelligent API solution for automatic spam protection without
                the manual work.
              </p>
              <div className="fs-5">
                <img src={icon2} alt="" className="icons" />
                <a href="/">in development</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3 ">
          <div className="col-4 border rounded p-5">
            <div>
              <img src={basin} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                A powerful, easy-to-configure form backend for designers and
                developers.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">usebasin.com</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={shipable} alt="" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Short, focused design and growth collabs for startup tech
                founders.
              </p>
              <div className="fs-5">
                <img src={icon1} alt="" className="icons" />
                <a href="/">shipable.io</a>
              </div>
            </div>
          </div>

          <div className="col-4 border rounded p-5">
            <div>
              <img src={junkbox} alt="" className="junkbox" />
            </div>
            <div className="fw-bold fs-4">
              <p className="pt-5">
                Intelligent API solution for automatic spam protection without
                the manual work.
              </p>
              <div className="fs-5">
                <img src={icon2} alt="" className="icons" />
                <a href="/">in development</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center">
        <p className="fw-bolder fs-2">Interested in collaborating with me?</p>
        <p className="fs-4">
          I’m always open to discussing product design work or partnership
          opportunities.
        </p>
      </div>
      <div className="seeMorebtn  mx-auto ">
        <a href="/" className="rounded-pill text-center fs-3 p-3">
          <img src={msgicon} alt="" className="seeMoreImage" />
          Start a Conversation
        </a>
      </div>
    </>
  );
};
