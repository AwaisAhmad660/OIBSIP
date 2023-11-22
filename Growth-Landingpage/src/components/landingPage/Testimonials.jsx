import React from "react";
import "./home.css";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials bg-dark">
        <div className="container">
          <h3 className="testimonials-heading text-xl">
            Don't just take our word for it, see the success stories from
            businesses just like yours.
          </h3>
          <div className="testimonials-grid">
            <div className="card">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum porro, quaerat omnis qui ad minus! Mollitia ipsum similique ratione non?
              </p>
              <p>Awais Ahmad</p>
              <p>SwiftSolvers</p>
            </div>
            <div className="card">
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque tenetur ipsum odio dolor voluptate error, quia ad iusto rerum explicabo nemo, perferendis modi excepturi numquam blanditiis illum et repudiandae?
              </p>
              <p>Jon Doe</p>
              <p>Google</p>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellat, impedit ullam fugit magnam dicta.
              </p>
              <p>William</p>
              <p>Amazon</p>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
};

export default Testimonials;
