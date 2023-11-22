import React from "react";
import designer from "../assets/designer.svg";

import frontend from "../assets/frontend.svg";
import mentor from "../assets/mentor.svg";

const Services = () => {
  return (
    <>
      <div className="serviceContainer ">
        <div className="text-light mx-auto">
          <p className="fs-1 text-center fw-bold pt-5">
            Hi, I’m Matt. Nice to meet you.
          </p>
          <p className="fs-5 text-center mx-auto bio">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>

      <div className="services mx-auto row border rounded">
        <div className="col border-end p-5">
          <div className="serviceImage text-center pt-3  rounded-circle  mx-auto">
            <img src={designer} alt="" />
          </div>
          <div>
            <p className="fs-2 fw-bolder text-center serviceTitle">Designer</p>
          </div>
          <div>
            <p className="fs-3">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <p className="colorpurple fw-bolder fs-4">
              Things I enjoy designing:
            </p>
            <p className="fw-bold">UX, UI, Web, Apps, Logos</p>
          </div>
          <div className="tools">
            <p className="colorpurple fw-bolder fs-4">Design Tools:</p>
            <ul className="fw-bold">
              <li>Affinity Designer</li>
              <li>Figma</li>
              <li>Font Awesome</li>
              <li>Paper and Pen</li>
              <li>Paper Sketch </li>
              <li>Webflow</li>
            </ul>
          </div>
        </div>

        <div className="col border-end p-5">
          <div className="serviceImage text-center pt-3   mx-auto rounded-circle">
            <img src={frontend} alt="" />
          </div>
          <div>
            <p className="fs-2 fw-bolder text-center serviceTitle">
              Frontend Developer
            </p>
          </div>
          <div>
            <p className="fs-3">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <p className="colorpurple fw-bolder fs-4">Languages I speak:</p>
            <p className="fw-bold">HTML, Pug, Slim, CSS, Sass, Git</p>
          </div>
          <div className="tools">
            <p className="colorpurple fw-bolder fs-4">Dev Tools:</p>
            <ul className="fw-bold">
              <li>Atom</li>
              <li>Bitbucket</li>
              <li>Bulma</li>
              <li>Codekit</li>
              <li>Github</li>
              <li>Surge</li>
              <li>Terminal</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>

        <div className="col border-end p-5">
          <div className="serviceImage text-center pt-3  mx-auto rounded-circle">
            <img src={mentor} alt="" className="" />
          </div>
          <div>
            <p className="fs-2 fw-bolder text-center serviceTitle">Mentor</p>
          </div>
          <div>
            <p className="fs-3">
              I genuinely care about people, and love helping fellow designers
              work on their craft.
            </p>
            <p className="colorpurple fw-bolder fs-4">
              Experiences I draw from:
            </p>
            <p className="fw-bold">UX/UI, Product design, Freelancing</p>
          </div>
          <div className="tools">
            <p className="colorpurple fw-bolder  fs-4">Mentor Stats:</p>
            <ul className="fw-bold">
              <li>7 years experience</li>
              <li>26 short courses</li>
              <li>65 bootcamps</li>
              <li>200+ students</li>
              <li>2,350+ mentor </li>
              <li>sessions</li>
              <li>60+ group critiques</li>
              <li>16,500+ comments</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
