import React, { useEffect, useState } from "react";
import "../components/MainComponent.css";
import groupImage2 from "../assets/groupImage.png";
import groupImage from "../assets/Group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import call from "../assets/icon _call calling_.svg";
import drop from "../assets/drop.svg";
import whatsup from "../assets/icon _whatsapp_.svg";
import group from "../assets/Group 427321605.svg";
import email from "../assets/icon4.svg";
import insta from "../assets/insta.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { styled } from "@mui/material/styles";
import Addfile from "../components/Addfile";
const Development = () => {
  const initialRange = [50, 10000];
  const initialMinValue = Math.round(
    initialRange[0] + 0.25 * (initialRange[1] - initialRange[0])
  );
  const initialMaxValue = Math.round(
    initialRange[1] - 0.25 * (initialRange[1] - initialRange[0])
  );

  const [sliderValue, setSliderValue] = useState([
    initialMinValue,
    initialMaxValue,
  ]);
  const [inputValue, setInputValue] = useState(
    `${initialMinValue} - ${initialMaxValue}`
  );
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  useEffect(() => {
    setInputValue(`$${sliderValue[0]} - $${sliderValue[1]}`);
  }, [sliderValue]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setIsPlaceholderVisible(false);
  };

  const handleInputChange = (e) => {
    const inputValues = e.target.value.split(" - ");
    let minValue = parseInt(inputValues[0]) || initialRange[0];
    let maxValue = parseInt(inputValues[1]) || initialRange[1];

    if (minValue < initialRange[0]) {
      minValue = initialRange[0];
    }

    if (maxValue > initialRange[1]) {
      maxValue = initialRange[1];
    }

    setSliderValue([minValue, maxValue]);
    setInputValue(`$${minValue} - $${maxValue}`);
  };

  const handleDivClick = () => {
    setIsPlaceholderVisible(false);
  };

  return (
    <main className="maincomponent">
      <div className="text-animation">
        <h2 className="text-animation1">
          <span style={{ color: "var(--blue)" }}>Order</span> Now, Enjoy It
          <br />
          with Design <span style={{ color: "var(--blue)" }}>Hub</span>
        </h2>
        <img className="svgitem1" src={groupImage2} alt="Group Image" />
        <img className="svgitem2" src={groupImage} alt="Group Image" />
      </div>

      <div className="text-animation">
        <h2 className="text-animation2">
          Efficient ordering for quick
          <span style={{ color: "var(--blue)" }}> satisfaction.</span>
          <br />
          Experience the difference today.
          <br />
        </h2>
      </div>
      <div className="form">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col-md-6">
            <label htmlFor="inputNumber4" className="form-label">
              Phone number{" "}
            </label>
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
              id="inputNumber4"
            />
          </div>
          <div class="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-12">
            <label for="inputState" className="form-label">
              Choose your preferred language
            </label>
            <select id="inputState" className="form-select">
              <option selected>Select language</option>
              <option>Hindi</option>
              <option>English</option>
            </select>
          </div>

          <div className="col-12">
            <label for="inputState" className="form-label">
              What type of design do you need?
            </label>
            <select id="inputState" className="form-select">
              <option selected>Your design type</option>
              <option> Website Development</option>

              <option>Mobile App Development</option>
              <option>Software Development</option>
              <option>E-commerce Development</option>
              <option>Email Development</option>
              <option>Game Development</option>
              <option>Database Development</option>
              <option>API Development</option>
              <option>Systems Development</option>
              <option>Cloud & DevOps</option>
              <option>Content Management System (CMS) Development</option>
              <option>Desktop Application Development</option>
              <option>AI & Machine Learning Development</option>
              <option>Blockchain Development</option>
              <option>Network Development</option>
              <option>Security Development</option>
              <option>QA & Testing</option>
            </select>
          </div>
          <div className="col-12">
            <label for="inputProject" className="form-Project">
              Describe your project
            </label>

            <textarea
              class="form-control"
              id="projectDescription"
              rows="7"
              placeholder="Enter project description here..."
            ></textarea>
          </div>
          <div className="col-12">
            <label for="inputState" className="form-label">
              How will your design be used?
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Your design usage"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">Add Reference files</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fileInput"
                placeholder="Your file link"
              />
              <Addfile />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fileInput">Add Inspiration files</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fileInput"
                placeholder="Your file link
                "
              />
              <Addfile />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fileInput">
              Link to any inspiration on the Web
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control iconn"
                id="fileInput"
                placeholder="Your Web link"
              />
              <Addfile />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control iconn"
                id="fileInput"
                placeholder="Your Web link"
              />
              <Addfile />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control iconn"
                id="fileInput"
                placeholder="Your Web link"
              />
              <Addfile />
            </div>
          </div>

          <div className="col-12">
            <label for="inputState" className="form-label">
              Who is your target audience?
            </label>
            <select id="inputState" className="form-select">
              <option selected>Your Target audience</option>
              <option>0 - 8 years old - (Gen Alpha)</option>
              <option>8 - 24 years old - (Gen Z or Zoomers) </option>
              <option> 25 - 40 years old - (Millennials)</option>
              <option> 41 - 56 years old - (Gen X)</option>
              <option>57 - 75 years old - (Baby Boomers) </option>
              <option> 76 - 93 years old - (Silent Generation)</option>
              <option> 94 - 100 years old - (Greatest Generation)</option>
            </select>
          </div>

          <div className="col-12">
            <label for="inputState" className="form-label">
              What's your timeline?{" "}
            </label>
            <select id="inputState" className="form-select">
              <option selected>Your Project deadline</option>
              <option>48 hours</option>
              <option>1 week</option>
              <option>2 week</option>
              <option>3 week</option>
              <option>1 Month</option>
              <option>I need to talk to my designer first.</option>
            </select>
          </div>

          <div className="col-12 ">
            <div className="div1">
              {isPlaceholderVisible ? (
                <div className="slider-label" onClick={handleDivClick}>
                  <label>What's your budget?</label>
                  <input type="text" placeholder="Price Guide $50 - $10000" />
                </div>
              ) : (
                <div className=" slider-label">
                  <label> What's your budget?</label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="range-input"
                  />
                </div>
              )}
              <Slider
                min={initialRange[0]}
                max={initialRange[1]}
                range
                value={sliderValue}
                onChange={handleSliderChange}
                handleStyle={[
                  {
                    backgroundColor: "white",
                    borderColor: "blue",
                  },
                  {
                    backgroundColor: "white",
                    borderColor: "blue",
                  },
                ]}
                trackStyle={[
                  { backgroundColor: "blue" },
                  { backgroundColor: "white" },
                ]}
              />
            </div>
          </div>

          <div className="col-12">
            <label for="inputState" className="form-label">
              What industry are you in?{" "}
            </label>
            <select id="inputState" className="form-select">
              <option selected>Select Industry</option>
              <option> Healthcare</option>
              <option>Hospitality & Tourism</option>
              <option> Banking & Finance</option>
              <option> Agriculture </option>
              <option> Automotive</option>
              <option> Automotive</option>
              <option> Education</option>
              <option>Consumer Goods</option>
              <option>Energy</option>
              <option>Entertainment & Media</option>
              <option>Information Technology</option>
              <option>Manufacturing</option>
              <option>Telecommunications</option>
              <option>Environmental Services</option>
              <option>Food & Beverage</option>
              <option>Transportation & Logistics</option>
              <option>Retail</option>
              <option>Real Estate</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">
              Add your website and/or social media pages (Facebook, Instagram,
              etc)
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="fileInput"
                placeholder="www.designhub.com"
              />
              <Addfile />
            </div>
          </div>

          <div className="radio">
            <fieldset className="row mb-3">
              <label htmlFor="companyType">
                Is your company a digital, marketing, or online business?
              </label>
              <div className="col-sm-10">
                <div class="form-check">
                  <input
                    className="form-check-input radiobtn"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input radiobtn"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input radiobtn"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault3">
                    Other
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="col-12">
            <label htmlFor="inputState" className="form-label">
              How did you hear about us?
            </label>
            <select id="inputState" className="form-select">
              <option defaultValue>Select Channel</option>
              <option> Word of Mouth</option>
              <option>Search Engine</option>
              <option>Search Engine</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Facebook</option> <option>LinkedIn</option>
              <option> YouTube</option>
              <option>Direct Mail</option>
              <option>Email Marketing or Newsletter</option>
              <option> Company Website</option>
              <option> Podcast or Webinar</option>
              <option> Blog or Article</option>
              <option> Affiliate Marketing</option>
              <option> Billboards or Outdoor Advertising</option>
              <option>Influencer</option>
              <option> Other</option>
            </select>
          </div>

          <div className="radio">
            <fieldset className="row mb-3">
              <label htmlFor="designPortfolio">
                Can your designer showcase the finished designs in their
                Designhub portfolio?
              </label>
              <div className="col-sm-10">
                <div class="form-check">
                  <input
                    className="form-check-input radiobtn"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input radiobtn"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="col-12">
            <label for="inputProject" className="form-Project">
              Anything else you'd like to share with your designer?{" "}
            </label>

            <textarea
              class="form-control"
              id="projectDescription"
              rows="11"
              placeholder="Hey, I need help..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn1 btn-primary Place-Order btn"
            style={{
              background: "#007EE5 !important",
              height: "70px",
              borderradius: "20px",
            }}
          >
            Place Order
          </button>
          <div className="text-animation">
            <h2 className="text-animation1 connectme">
              Reach Out and
              <span style={{ color: "var(--blue)" }}> Connect</span>
              <br />
              Directly with Me!
            </h2>
          </div>

          <div className="text-animation">
            <h2
              className="text-animation3 text3"
              style={{ marginTop: "-45px" }}
            >
              <span style={{ color: "var(--blue)" }}>Let's chat! </span>
              Feel free to connect and share directly
              <br />
              with me anytime.
            </h2>
          </div>

          <div className="container">
            <div className="contactme">
              <div>
                <img className="svg" src={call} alt="contactme" />
                <a
                  className="span"
                  href="tel:+919310038567"
                  style={{
                    margin: "3rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  9310038567
                </a>
              </div>
              <div>
                <img className="svg" src={drop} alt="svg" />
              </div>
            </div>

            <div className="contactme">
              <div>
                <img className="svg" src={whatsup} alt="contactme" />
                <a
                  className="span"
                  href="https://wa.me/9310038567"
                  style={{
                    margin: "3rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  9310038567
                </a>
              </div>
              <div>
                <img className="svg" src={drop} alt="svg" />
              </div>
            </div>
            <div className="contactme">
              <div>
                <img className="svg" src={group} alt="contactme" />
                <span
                  className="span"
                  style={{ margin: "3rem", fontWeight: 700, cursor: "pointer" }}
                >
                  9310038567
                </span>
              </div>
              <div>
                <img className="svg" src={drop} alt="svg" />
              </div>
            </div>
            <div className="contactme">
              <div>
                <img className="svg" src={email} alt="contactme" />
                <a
                  className="span"
                  href="mailto:designhub@gmail.com"
                  style={{
                    margin: "3rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  designhub@gmail.com
                </a>
              </div>
              <div>
                <img className="svg" src={drop} alt="svg" />
              </div>
            </div>
            <div className="contactme">
              <div>
                <img className="svg" src={insta} alt="insta" />
                <span
                  className="span"
                  style={{ margin: "3rem", fontWeight: 700, cursor: "pointer" }}
                >
                  @designhub{" "}
                </span>
              </div>
              <div>
                <img className="svg" src={drop} alt="svg" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Development;
