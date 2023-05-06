import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">They Key to Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Unacknowledged paraphrasing of the work of other authors even in your
        own words without a proper reference to the original source.Duplicating
        another students work and pretending it is your own
      </p>
      <button type="button" className="custom__button">
        Explore Button
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
