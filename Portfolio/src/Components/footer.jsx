import React from 'react'
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";
import web from "../assets/web.svg";
import linkdin from "../assets/linkdin.svg";
import HI from "../assets/IH.svg";
import pintrest from "../assets/p.svg";
import Mail from "../assets/mail.svg";
import copyright from "../assets/copyright.svg";
import bulma from "../assets/bulma.png";
const Footer = () => {
  return (
    <>
      <div className="mx-auto footerHead rounded text-white  align-items-center">
        <div className="d-flex p-5 justify-content-between">
          <p className="fw-bold fs-1"> Start a project</p>
          <p className="fs-4 mt-3">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
          <div className="fs-4 mt-3">Lets do this</div>
        </div>
      </div>

      <div className="footerContent text-center text-white">
        <div className="">
          <div>
            <img src={logo} alt="" className="footerIconmain" />
          </div>
          <div>
            <p className="fs-5 p-3">
              Living, learning, & leveling up one day at a time.
            </p>
          </div>
          <div className='p-2'>
            <img src={twitter} alt="" className="footerIcon" />
            <img src={web} alt="" className="footerIcon" />
            <img src={linkdin} alt="" className="footerIcon" />
            <img src={HI} alt="" className="footerIcon" />
            <img src={pintrest} alt="" className="footerIcon" />
            <img src={Mail} alt="" className="footerIcon" />
          </div>

          <div className="fs-5 p-3">
            <span>Handcrafted by</span>{" "}
            <img src={copyright} alt="" className="copyright" />
            <span>metwentytwentythree</span>
          </div>
          <div className='p-4'> 
            <img src={bulma} alt="" className='bulmaImg' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;