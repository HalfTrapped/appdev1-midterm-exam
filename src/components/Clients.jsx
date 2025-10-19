import React from "react";

// ✅ Import images (adjust these paths if you keep them in /src/assets)
import headingLine from "../assets/images/heading-line-dec.png";
import quoteImg from "../assets/images/quote.png";
import clientImg from "../assets/images/client-image.jpg";

const Clients = () => {
  return (
    <div id="clients" className="the-clients">
      <div className="container">
        <div className="row">
          {/* Section Heading */}
          <div className="col-lg-8 offset-lg-2">
            <div className="section-heading text-center">
              <h4>
                Check What <em>The Clients Say</em> About Our App Dev
              </h4>
              <img src={headingLine} alt="heading line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  {/* Left Side - Menu List */}
                  <div className="col-lg-7 align-self-center">
                    <div className="menu">
                      {/* First Thumb */}
                      <div className="first-thumb active">
                        <div className="thumb">
                          <div className="row">
                            <div className="col-lg-4 col-sm-4 col-12">
                              <h4>David Martino Co</h4>
                              <span className="date">30 November 2021</span>
                            </div>
                            <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                              <span className="category">Financial Apps</span>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-12">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa fa-star"></i>
                              ))}
                              <span className="rating">4.8</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Other Thumbs */}
                      {[
                        { name: "Jake Harris Nyo", date: "29 November 2021", cat: "Digital Business", rating: 4.5 },
                        { name: "May Catherina", date: "27 November 2021", cat: "Business & Economics", rating: 4.7 },
                        { name: "Random User", date: "24 November 2021", cat: "New App Ecosystem", rating: 3.9 },
                        { name: "Mark Amber Do", date: "21 November 2021", cat: "Web Development", rating: 4.3 },
                      ].map((client, idx) => (
                        <div key={idx} className={idx === 4 ? "last-thumb" : ""}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>{client.name}</h4>
                                <span className="date">{client.date}</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">{client.cat}</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className="fa fa-star"></i>
                                ))}
                                <span className="rating">{client.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Testimonials */}
                  <div className="col-lg-5">
                    <ul className="nacc">
                      {[
                        {
                          quote:
                            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "David Martino",
                          title: "CEO of David Company",
                        },
                        {
                          quote:
                            "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Jake H. Nyo",
                          title: "CTO of Digital Company",
                        },
                        {
                          quote:
                            "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "May C.",
                          title: "Founder of Catherina Co.",
                        },
                        {
                          quote:
                            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Random Staff",
                          title: "Manager, Digital Company",
                        },
                        {
                          quote:
                            "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
                          name: "Mark Am",
                          title: "CTO, Amber Do Company",
                        },
                      ].map((item, i) => (
                        <li key={i} className={i === 0 ? "active" : ""}>
                          <div className="thumb">
                            <div className="client-content">
                              <img src={quoteImg} alt="quote" />
                              <p>{item.quote}</p>
                            </div>
                            <div className="down-content">
                              <img src={clientImg} alt="client" />
                              <div className="right-content">
                                <h4>{item.name}</h4>
                                <span>{item.title}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Clients;
