import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <div className="container-sm">
          <h3 className="pricing-heading text-xl text-center">Pricing</h3>
          <p className="pricing-subheading text-md text-center">
            Start free and scale while you grow. No hidden fees. Unlimited users
            for free.
          </p>
          <div className="pricing-grid">
            <div className="card bg-light">
              Schedule <i className="fa fa-check"></i>
              <div className="pricing-card-header">
                <h4 className="pricing-heading text-xl">Simple</h4>
                <p className="pricing-card-subheading">
                  Keep track of your contacts, gain valuable insights, analyze
                  live data and performance metrics.
                </p>
                <p className="pricing-card-price">
                  <span className="text-xl">Free</span>
                  *No credit card needed
                </p>
              </div>
              <div className="pricing-card-body">
                <ul>
                  <li>
                    <i className="fa fa-check"></i> Real-Time Monitoring
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Track key performance
                    indicators
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Schedule appointments
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Organize, delegate and keep
                    track of tasks
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block">
                  Get Started
                </a>
              </div>
            </div>
            <div className="card bg-black">
              <div className="pricing-card-header  text-violet-100">
                <h4 className="pricing-card-heading text-xl">Premium</h4>
                <p className="pricing-card-subheading">
                  Keep track of your contacts, gain valuable insights, analyze
                  live data and performance metrics.
                </p>
                <p className="pricing-card-price">
                  <span className="text-xl ">$49</span> /month
                </p>
              </div>
              <div className="pricing-card-body  text-violet-100">
                <p>Everything from the free plan plus:</p>
                <ul>
                  <li>
                    <i className="fa fa-check"></i>Data-driven decisions
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Data visualization
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Schedule appointments
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <p className="pricing-footer text-center">
            All prices are in USD and charged per month with applicable taxes
            added at checkout.
          </p>
        </div>
      </section>
    </>
  );
};

export default Pricing;
